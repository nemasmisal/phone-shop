import { Action, createReducer, on } from '@ngrx/store';
import * as admin from './actions';
import { IAdminState } from '../models'

const initialState: IAdminState = {
  orders: [],
  historyOrders: [],
  users: []
}

const adminReducer = createReducer(
  initialState,
  on(admin.getOrdersSuccess, (state, props) => ({ ...state, ...props })),
  on(admin.getOrdersFailed, (state, props) => ({ ...state, ...props })),
  on(admin.getHistoryOrdersSuccess, (state, props) => ({ ...state, ...props })),
  on(admin.getHistoryOrdersFailed, (state, props) => ({ ...state, ...props })),
  on(admin.usersSuccess, (state, props) => ({ ...state, ...props })),
  on(admin.usersFailed, (state, props) => ({ ...state, ...props })),
)

export const featureKey = 'admin';

export function reducer(state: IAdminState, action: Action): IAdminState {
  return adminReducer(state, action);
}