import { Action, createReducer, on } from '@ngrx/store';
import { errorMonitor } from 'events';
import * as auth from './actions';


export interface IState {
  _id: string;
  username: string;
  admin: boolean;
  basket: [];
  favorites: [];
  error: string;
}

const initialState: IState = {
  _id: null,
  username: null,
  admin: false,
  basket: [],
  favorites: [],
  error: null
}

const reduce = createReducer(
  initialState,
  on(auth.login, state => ({ ...state })),
  on(auth.loginSuccess, (state, action: any) => ({ ...state, ...action.payload })),
  on(auth.loginFailed, (state, action: any) => ({ ...state, ...action.payload })),
  on(auth.logout, state => ({ ...state })),
  on(auth.logoutSuccess, (state, action: any) => ({ ...state, ...initialState })),
  on(auth.logoutFailed, (state, action: any) => ({ ...state, ...initialState })),
  on(auth.register, state => ({ ...state })),
  on(auth.registerSuccess, (state, action: any) => ({ ...state, ...action.payload })),
  on(auth.registerFailed, (state, action: any) => ({ ...state, ...action.payload }))


);

export function reducer(state: IState, action: Action): IState {
  return reduce(state, action);
}