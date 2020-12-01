import { Action, createReducer, on } from '@ngrx/store';
import { IArticle } from 'src/app/core/models';
import * as user from './actions';

export interface IUserState {
  basket: IArticle[];
  favorites: IArticle[];
}

const initialState: IUserState = {
  basket: [],
  favorites: [],
}

const userReducer = createReducer(
  initialState,
  on(user.basket, state => ({ ...state })),
  on(user.basketSuccess, (state, props) => ({ ...state, ...props}))
)

export function reducer(state: IUserState, action: Action): IUserState {
  return userReducer(state, action);
}