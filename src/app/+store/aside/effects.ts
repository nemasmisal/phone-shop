import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticleService } from 'src/app/core/services/article.service';
import { ActionTypes } from './action';

@Injectable()
export class AsideEffects {
  constructor(private articleService: ArticleService, private actions$: Actions) {}

  newest$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getNewest),
    switchMap(() => this.articleService.getNewestArticle().pipe(
      map((action) => ({ type: ActionTypes.getNewestSuccess, action})),
      catchError((err) => of({ type: ActionTypes.getNewestFailed, ...err }))
    ))
  ))
}