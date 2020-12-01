import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { ActionTypes } from './actions';


@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService, private router: Router) { }

  basket$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getBasket),
    mergeMap(() => this.userService.getBasket().pipe(
      map(basket => ({ type: ActionTypes.getBasketSuccess, basket })),
      catchError((err) => of({ type: ActionTypes.getBasketFailed, ...err }))
    ))
  ))
}