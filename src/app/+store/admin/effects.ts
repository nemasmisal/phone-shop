import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OrderService } from 'src/app/core/services/order.service';
import { ActionTypes } from './actions';


@Injectable()
export class AdminEffects {
  constructor(private actions$: Actions, private orderService: OrderService) { }

  orders$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getOrders),
    switchMap(() => this.orderService.getOrders().pipe(
      map(orders => ({ type: ActionTypes.getOrdersSuccess, ...orders })),
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


}
