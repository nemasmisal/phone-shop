import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { OrderService } from 'src/app/core/services/order.service';
import { UserService } from 'src/app/core/services/user.service';
import { ActionTypes } from './actions';


@Injectable()
export class AdminEffects {
  constructor(private actions$: Actions,
    private orderService: OrderService,
    private userService: UserService,
    public toastr: ToastrService,
    private router: Router) { }

  orders$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getOrders),
    switchMap(() => this.orderService.getOrders().pipe(
      map(orders => ({ type: ActionTypes.getOrdersSuccess, orders })),
      catchError((err) => of({ type: ActionTypes.getOrdersFailed, ...err }))
    ))
  ))

  aproveOrder$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.aproveOrder),
    switchMap((payload) => this.orderService.aproveOrder((payload as any).orderId).pipe(
      tap(() =>this.toastr.success('Order was successfully aproved.')),
      map(() => ({ type: ActionTypes.getOrders })),
      catchError((err) => of({ type: ActionTypes.getOrdersFailed, ...err }))
    ))
  ))

  historyOrders$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getHistoryOrders),
    switchMap(() => this.orderService.getHistoryOrders().pipe(
      map(historyOrders => ({ type: ActionTypes.getHistoryOrdersSuccess, historyOrders })),
      catchError((err) => of({ type: ActionTypes.getHistoryOrdersFailed, ...err }))
    ))
  ))

  users$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getUsers),
    switchMap(() => this.userService.getUsers().pipe(
      map(users => ({ type: ActionTypes.getUsersSuccess, users })),
      catchError((err) => of({ type: ActionTypes.getUsersFailed, ...err }))
    ))
  ))

  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.updateUser),
    switchMap((payload) => this.userService.updateUser(payload).pipe(
      tap(() => this.toastr.success('User data was successfully updated.')),
      map(() => ((this.router.navigate(['admin', 'users'])), { type: ActionTypes.updateUserSuccess })),
      catchError((err) => of({ type: ActionTypes.updateUserFailed, ...err }))
    ))
  ))

}
