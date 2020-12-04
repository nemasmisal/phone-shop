import { Action, createReducer, on } from '@ngrx/store';
import { IHistory, IOrder } from 'src/app/core/models';
import * as admin from './actions';

export interface IAdminState {
  orders: IOrder[];
  historyOrders: IHistory[];
}

const initialState: IAdminState = {
  orders: [],
  historyOrders: []
}

const adminReducer = createReducer(
  initialState,
  on(admin.getOrdersSuccess, (state, props) => ({ ...state, ...props })),
  on(admin.getOrdersFailed, (state, props) => ({ ...state, ...props })),
  on(admin.getHistoryOrdersSuccess, (state, props) => ({ ...state, ...props })),
  on(admin.getHistoryOrdersFailed, (state, props) => ({ ...state, ...props }))
)

export function reducer(state: IAdminState, action: Action): IAdminState {
  return adminReducer(state, action);
}