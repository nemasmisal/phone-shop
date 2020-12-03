import {Action, createAction, props } from '@ngrx/store';
import { IHistory, IOrder } from 'src/app/core/models';

export const ActionTypes = {
  getOrders: '[Orders Page] Loading',
  getOrdersSuccess: '[Orders Page] Loading Success',
  getOrdersFailed: '[Orders Page] Loading Failed',
  getHistoryOrders: '[History Orders Page] Loading',
  getHistoryOrdersSuccess: '[History Orders Page] Loading Success',
  getHistoryOrdersFailed: '[History Orders Page] Loading Failed',
  aproveOrder: '[Aprove Order] Loading',
  aproveOrderSuccess: '[Aprove Order] Loading Success',
  aproveOrderFailed: '[Aprove Order] Loading Failed',
}



export const getOrders = createAction(ActionTypes.getOrders);
export const getOrdersSuccess = createAction(ActionTypes.getOrdersSuccess, props<{ orders: IOrder[] }>());
export const getOrdersFailed = createAction(ActionTypes.getHistoryOrdersFailed, props<{ error: any }>());

export const getHistoryOrders = createAction(ActionTypes.getHistoryOrders);
export const getHistoryOrdersSuccess = createAction(ActionTypes.getHistoryOrdersSuccess, props<{ historyOrders: IHistory[] }>());
export const getHistoryOrdersFailed = createAction(ActionTypes.getHistoryOrdersFailed, props<{ error: any }>());