import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { ArticleService } from 'src/app/core/services/article.service';
import { ActionTypes } from './action';
import { ToastrService } from 'ngx-toastr';

interface IAction extends Action {
  payload: any;
}

@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions, private articleService: ArticleService, private router: Router, private toastr: ToastrService, private store: Store) { }

  phones$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getPhones),
    mergeMap(() => this.articleService.getAllPhones().pipe(
      map(phones => ({ type: ActionTypes.getPhonesSuccess, phones })),
      catchError((err) => of({ type: ActionTypes.getPhonesFailed, ...err }))
    ))
  ))

  cases$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getCases),
    mergeMap(() => this.articleService.getAllCases().pipe(
      map(cases => ({ type: ActionTypes.getCasesSuccess, cases })),
      catchError((err) => of({ type: ActionTypes.getCasesFailed, ...err }))
    ))
  ))

  screenProtectors$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getCases),
    mergeMap(() => this.articleService.getAllScreenProtectors().pipe(
      map(screenProtectors => ({ type: ActionTypes.getScreenProtectorsSuccess, screenProtectors })),
      catchError((err) => of({ type: ActionTypes.getScreenProtectorsFailed, ...err }))
    ))
  ))

  accessories$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getCases),
    mergeMap(() => this.articleService.getAllAccessories().pipe(
      map(accessories => ({ type: ActionTypes.getAccessoriesSuccess, accessories })),
      catchError((err) => of({ type: ActionTypes.getAccessoriesFailed, ...err }))
    ))
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
      map(() => (this.router.navigate(['home']), { type: ActionTypes.likeArticleSuccess })),
      catchError((err) => of({ type: ActionTypes.likeArticleFailed, ...err }))
    ))
  ))
}