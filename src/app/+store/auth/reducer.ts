import { Action, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../models';
import * as auth from './actions';

const initialState: IAuthState = {
  _id: null,
  username: null,
  admin: false,
  error: null
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

export const featureKey = 'auth';

export function reducer(state: IAuthState, action: Action): IAuthState {
  return authReducer(state, action);
}