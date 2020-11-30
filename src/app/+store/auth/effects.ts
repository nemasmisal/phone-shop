import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs'
import { UserService } from 'src/app/core/services/user.service';
import { ActionTypes } from './actions';

export interface IAction extends Action {
  payload: any;
}

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private userService: UserService, private router: Router) { }

  login$ = createEffect(() => this.actions$.pipe(
    ofType<IAction>(ActionTypes.Login),
    mergeMap(action => {
      return this.userService.login(action.payload).pipe(
        map(data => (
          this.router.navigate(['home']),
          { type: ActionTypes.LoginSuccess, payload: data }
        )),
        catchError((err) => of({ type: ActionTypes.LoginFailed, payload: err.error }))
      )
    })
  ))

  register$ = createEffect(() => this.actions$.pipe(
    ofType<IAction>(ActionTypes.Register),
    mergeMap(action => {
      return this.userService.register(action.payload).pipe(
        map(data => (
          this.router.navigate(['home']), { type: ActionTypes.RegisterSuccess, payload: data }
        )),
        catchError((err) => of({ type: ActionTypes.RegisterFailed, payload: err.error }))
      )
    })
  ))

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.Logout),
    switchMap(() => this.userService.logout().pipe(
      map(() => ({ type: ActionTypes.LogoutSuccess })),
      catchError((err) => of({ type: ActionTypes.LogoutrFailed, error: err.error }))
    ))
  ))
}

