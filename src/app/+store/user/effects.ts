import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { ActionTypes, IAction } from './actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService, private toastr: ToastrService) { }

  basket$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getBasket),
    mergeMap(() => this.userService.getBasket().pipe(
      map(basket => ({ type: ActionTypes.getBasketSuccess, basket })),
      catchError((err) => of({ type: ActionTypes.getBasketFailed, ...err }))
    ))
  ))

  addToBasket$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.addToBasket),
    mergeMap(action => this.userService.addToBasket((action as IAction).payload).pipe(
      tap(() => this.toastr.success('Added to your basket.')),
      map(() => ({ type: ActionTypes.addToBasketSuccess })),
      catchError((err) => of({ type: ActionTypes.addToBasketFailed, ...err }))
    ))
  ))

  removeFromBasket$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.removeFromBasket),
    mergeMap(action => this.userService.removeFromBasket((action as IAction).payload).pipe(
      tap(() => this.toastr.error('Removed from your basket.')),
      map(() => ({ type: ActionTypes.removeFromFavoritesSuccess, action })),
      catchError((err) => of({ type: ActionTypes.removeFromBasketFailed, ...err }))
    ))
  ))

  orderBasket$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.orderBasket),
    mergeMap(() => this.userService.placeOrder().pipe(
      tap(() => this.toastr.success('Your order was placed.')),
      map(() => ({ type: ActionTypes.orderBasketSuccess })),
      catchError((err) => of({ type: ActionTypes.orderBasketFailed, ...err }))
    ))
  ))

  favorites$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getFavorites),
    mergeMap(() => this.userService.getFavorites().pipe(
      map(favorites => ({ type: ActionTypes.getFavoritesSuccess, favorites })),
      catchError((err) => of({ type: ActionTypes.getFavoritesFailed, ...err }))
    ))
  ))

  addToFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.addToFavorites),
    mergeMap(action => this.userService.addToFavorites((action as IAction).payload).pipe(
      tap(() => this.toastr.success('Added in to your favorites.')),
      map(() => ({ type: ActionTypes.addToFavoritesSuccess })),
      catchError((err) => of({ type: ActionTypes.removeFromFavoritesFailed, ...err }))
    ))
  ))

  removeFromFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.removeFromFavorites),
    mergeMap(action => this.userService.removeFromFavorites((action as IAction).payload).pipe(
      tap(() => this.toastr.error('Not your favorite anymore.')),
      map(() => ({ type: ActionTypes.removeFromFavoritesSuccess, action })),
      catchError((err) => of({ type: ActionTypes.removeFromFavoritesFailed, ...err }))
    ))
  ))
}