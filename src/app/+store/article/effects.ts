import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ArticleService } from 'src/app/core/services/article.service';
import { ActionTypes } from './action';
import { ToastrService } from 'ngx-toastr';
import { IAction } from '../models'


@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions, private articleService: ArticleService, private router: Router, private toastr: ToastrService) { }

  all$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getArticles),
    switchMap(() => {
      return forkJoin({
        phones: this.articleService.getAllPhones(),
        cases: this.articleService.getAllCases(),
        screenProtectors: this.articleService.getAllScreenProtectors(),
        accessories: this.articleService.getAllAccessories()
      }).pipe(
        map(articles => ({ type: ActionTypes.getArticlesSuccess, ...articles })),
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
    ofType(ActionTypes.editArticle),
    switchMap((action: any) => this.articleService.postEditArticle(action.id, action.payload).pipe(
      tap(() => this.toastr.success('Article was updated successful.')),
      map(() => (this.router.navigate(['home']), { type: ActionTypes.editArticleSuccess })),
      catchError((err) => of({ type: ActionTypes.editArticleFailed, ...err }))
    ))
  ))

  removeArticle$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.removeArticle),
    switchMap((action: any) => this.articleService.removeArticle(action.id).pipe(
      tap(() => this.toastr.success('Article was removed successful.')),
      map(() => (this.router.navigate(['home']), { type: ActionTypes.removeArticleSuccess })),
      catchError((err) => of({ type: ActionTypes.removeArticleFailed, ...err }))
    ))
  ))

  likeArticle$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.likeArticle),
    switchMap((action: any) => this.articleService.likeArticle(action.id).pipe(
      tap(() => this.toastr.success('You like it!.')),
      map(() => ({ type: ActionTypes.getArticles})),
      catchError((err) => of({ type: ActionTypes.likeArticleFailed, ...err }))
    ))
  ))

}