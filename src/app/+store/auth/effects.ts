import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs'
import { UserService } from 'src/app/core/services/user.service';
import { ActionTypes } from './actions';
import { ToastrService } from 'ngx-toastr';

interface ILogin extends Action {
  username: string;
  password: string;
}

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private userService: UserService, private router: Router, private toastr: ToastrService) { }

  login$ = createEffect(() => this.actions$.pipe(
    ofType<ILogin>(ActionTypes.Login),
    mergeMap(action => {
      const { username, password } = action;
      return this.userService.login({ username, password }).pipe(
        tap(() => this.toastr.success('Successfully logged in !')),
        map(action => (this.router.navigate(['home']), { type: ActionTypes.LoginSuccess, ...action })),
        catchError((err) => of({ type: ActionTypes.LoginFailed, ...err }))
      )
    })
  ))

  register$ = createEffect(() => this.actions$.pipe(
    ofType<ILogin>(ActionTypes.Register),
    mergeMap(action => {
      const { username, password } = action;
      return this.userService.register({ username, password }).pipe(
        tap(() => this.toastr.success('Successfully Registered !')),
        map(action => (this.router.navigate(['home']), { type: ActionTypes.RegisterSuccess, ...action })),
        catchError((err) => of({ type: ActionTypes.RegisterFailed, ...err }))
      )
    })
  ))

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.Logout),
    switchMap(() => this.userService.logout().pipe(
      tap(() => this.toastr.success('Successfully logged out !')),
      map(() => this.router.navigate(['home']), ({ type: ActionTypes.LogoutSuccess })),
      catchError((err) => of({ type: ActionTypes.LogoutrFailed, ...err }))
    ))
  ))
}

