import { createAction, props } from '@ngrx/store';
import { IHistory, IOrder, IUser } from 'src/app/core/models';

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
  getUsers: '[Users Page] Loading',
  getUsersSuccess: '[Users Page] Loading Success',
  getUsersFailed: '[Users Page] Loading Failed',
  updateUser: '[Update Users] Updating',
  updateUserSuccess: '[Update Users] Updating Success',
  updateUserFailed: '[Update Users] Updaing Failed'
}

export const getOrders = createAction(ActionTypes.getOrders);
export const getOrdersSuccess = createAction(ActionTypes.getOrdersSuccess, props<{ orders: IOrder[] }>());
export const getOrdersFailed = createAction(ActionTypes.getHistoryOrdersFailed, props<{ error: any }>());

export const getHistoryOrders = createAction(ActionTypes.getHistoryOrders);
export const getHistoryOrdersSuccess = createAction(ActionTypes.getHistoryOrdersSuccess, props<{ historyOrders: IHistory[] }>());
export const getHistoryOrdersFailed = createAction(ActionTypes.getHistoryOrdersFailed, props<{ error: any }>());

export const users = createAction(ActionTypes.getUsers);
export const usersSuccess = createAction(ActionTypes.getUsersSuccess, props<{ users: IUser[] }>());
export const usersFailed = createAction(ActionTypes.getUsersFailed, props<{ error: any }>());

export const updateUser = createAction(ActionTypes.updateUser, props<{ username: string, password: string, admin: boolean, userId: string }>());
export const updateUserSuccess = createAction(ActionTypes.updateUserSuccess);
export const updateUserFailed = createAction(ActionTypes.updateUserFailed, props<{ error: any }>());

export const aproveOrder = createAction(ActionTypes.aproveOrder, props<{ orderId: string }>());