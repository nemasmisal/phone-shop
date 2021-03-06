import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs'
import { AuthService } from 'src/app/core/services/auth.service';
import { ActionTypes } from './actions';
import { ToastrService } from 'ngx-toastr';
import { IUser } from '../models'

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  init$ = createEffect(() => this.actions$.pipe(
    ofType('@ngrx/effects/init'),
    switchMap(() => {
      return this.authService.checkAuth().pipe(
        tap(action => this.toastr.success(`Welcome back ${(action as any).username}`)),
        map(action => (this.router.navigate(['home']), { type: ActionTypes.LoginSuccess, ...action })),
        catchError((err) => of({ type: ActionTypes.LogoutrFailed, ...err }))
      )
    })
  ))

  login$ = createEffect(() => this.actions$.pipe(
    ofType<IUser>(ActionTypes.Login),
    switchMap(action => {
      const { username, password } = action;
      return this.authService.login({ username, password }).pipe(
        tap(() => this.toastr.success('Successfully logged in !')),
        map(action => (this.router.navigate(['home']), { type: ActionTypes.LoginSuccess, ...action })),
        catchError((err) => of({ type: ActionTypes.LoginFailed, ...err }))
      )
    })
  ))

  register$ = createEffect(() => this.actions$.pipe(
    ofType<IUser>(ActionTypes.Register),
    switchMap(action => {
      const { username, password } = action;
      return this.authService.register({ username, password }).pipe(
        tap(() => this.toastr.success('Successfully Registered !')),
        map(action => (this.router.navigate(['home']), { type: ActionTypes.RegisterSuccess, ...action })),
        catchError((err) => of({ type: ActionTypes.RegisterFailed, ...err }))
      )
    })
  ))

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.Logout),
    switchMap(() => this.authService.logout().pipe(
      tap(() => this.toastr.success('Successfully logged out !')),
      map(() => (this.router.navigate(['home']), { type: ActionTypes.LogoutSuccess })),
      catchError((err) => of({ type: ActionTypes.LogoutrFailed, ...err }))
    ))
  ))
}

