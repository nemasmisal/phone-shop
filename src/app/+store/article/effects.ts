import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ArticleService } from 'src/app/core/services/article.service';
import { ActionTypes } from './action'

@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions, private articleService: ArticleService) {}

  phones$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getPhones),
    mergeMap(() => this.articleService.getAllPhones().pipe(
      map(phones => ({type: ActionTypes.getPhonesSuccess, phones})),
      catchError((err) => of({ type: ActionTypes.getPhonesFailed, ...err}))
    ))
  ))

  cases$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getCases),
    mergeMap(() => this.articleService.getAllCases().pipe(
      map(cases => ({type: ActionTypes.getCasesSuccess, cases})),
      catchError((err) => of({ type: ActionTypes.getCasesFailed, ...err}))
    ))
  ))

  screenProtectors$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getCases),
    mergeMap(() => this.articleService.getAllScreenProtectors().pipe(
      map(screenProtectors => ({type: ActionTypes.getScreenProtectorsSuccess, screenProtectors})),
      catchError((err) => of({ type: ActionTypes.getScreenProtectorsFailed, ...err}))
    ))
  ))

  accessories$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getCases),
    mergeMap(() => this.articleService.getAllAccessories().pipe(
      map(accessories => ({type: ActionTypes.getAccessoriesSuccess, accessories})),
      catchError((err) => of({ type: ActionTypes.getAccessoriesFailed, ...err}))
    ))
  ))

}