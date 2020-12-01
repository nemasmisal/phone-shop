import { Action, createReducer, on } from '@ngrx/store';
import { IState } from '../models';
import * as auth from './actions';

const initialState: IState = {
  _id: null,
  username: null,
  admin: false,
  error: null
}

export interface IAction extends Action {
  payload: any;
}

const authReducer = createReducer(
  initialState,
  on(auth.login, state => ({ ...state })),
  on(auth.loginSuccess, (state, props) => ({ ...state, ...props })),
  on(auth.loginFailed, (state, props) => ({ ...state, ...props.error })),
  on(auth.logout, state => ({ ...state })),
  on(auth.logoutSuccess, () => ({ ...initialState })),
  on(auth.logoutFailed, (state, props) => ({ ...state, ...props.error })),
  on(auth.register, state => ({ ...state })),
  on(auth.registerSuccess, (state, props) => ({ ...state, ...props })),
  on(auth.registerFailed, (state, props) => ({ ...state, ...props }))
);

export function reducer(state: IState, action: Action): IState {
  return authReducer(state, action);
}