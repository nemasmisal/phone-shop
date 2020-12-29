import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ArticleService } from 'src/app/core/services/article.service';
import { ActionTypes } from './action';
import { ToastrService } from 'ngx-toastr';
import { IAction } from '../models';
import { Store } from '@ngrx/store';
import { getNewest } from 'src/app/+store/aside/action';


@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions,
    private articleService: ArticleService,
    private router: Router,
    private toastr: ToastrService,
    private store: Store) { }

  init$ = createEffect(() => this.actions$.pipe(
    ofType('@ngrx/effects/init'),
    switchMap(() => {
      return this.articleService.getAllArticles().pipe(
        map(articles => ({ type: ActionTypes.getArticlesSuccess, articles })),
        catchError((err) => of({ type: ActionTypes.getArticlesFailed, ...err }))
      )
    })
  ))

  all$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getArticles),
    switchMap(() => {
      return this.articleService.getAllArticles().pipe(
        map(articles => ({ type: ActionTypes.getArticlesSuccess, articles })),
        catchError((err) => of({ type: ActionTypes.getArticlesFailed, ...err }))
      )
    })
  ))

  createArticle$ = createEffect(() => this.actions$.pipe(
    ofType<IAction>(ActionTypes.createArticle),
    switchMap(action => this.articleService.createArticle(action.payload).pipe(
      tap(() => this.toastr.success('New Article was created successful.')),
      map(() => (this.router.navigate(['home']), { type: ActionTypes.createArticleSuccess })),
      catchError((err) => of({ type: ActionTypes.createArticleFailed, ...err }))
    ))
  ))

  editArticle$ = createEffect(() => this.actions$.pipe(
    ofType<IAction>(ActionTypes.editArticle),
    switchMap(action => this.articleService.postEditArticle(action.payload.id, action.payload.article).pipe(
      tap(() => this.toastr.success('Article was updated successful.')),
      map(() => (this.router.navigate(['home']), { type: ActionTypes.getArticles })),
      catchError((err) => of({ type: ActionTypes.editArticleFailed, ...err }))
    ))
  ))

  removeArticle$ = createEffect(() => this.actions$.pipe(
    ofType<IAction>(ActionTypes.removeArticle),
    switchMap(action => this.articleService.removeArticle(action.payload.id).pipe(
      tap(() => this.toastr.success('Article was removed successful.')),
      map(() => {
        this.store.dispatch(getNewest());
        return (this.router.navigate(['home']), { type: ActionTypes.getArticles })
      }),
      catchError((err) => of({ type: ActionTypes.removeArticleFailed, ...err }))
    ))
  ))

  likeArticle$ = createEffect(() => this.actions$.pipe(
    ofType<IAction>(ActionTypes.likeArticle),
    switchMap(action => this.articleService.likeArticle(action.payload.id).pipe(
      tap(() => this.toastr.success('You liked it!')),
      map(() => ({ type: ActionTypes.getArticles })),
      catchError((err) => of({ type: ActionTypes.likeArticleFailed, ...err }))
    ))
  ))
}