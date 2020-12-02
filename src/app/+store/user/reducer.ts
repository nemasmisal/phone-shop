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
  on(user.basketSuccess, (state, props) => ({ ...state, ...props })),
  on(user.basketFailed, (state, props) => ({ ...state, ...props.error })),
  on(user.addToBasket, state => ({ ...state })),
  on(user.removeFromBasket, (state, { payload }) => {
    const basket = state.basket.filter((article: IArticle) => article._id !== payload);
    return { favorites: state.favorites, basket };
  }),
  on(user.removeFromBasketFailed, (state, props) => ({ ...state, ...props })),
  on(user.orderBasketSuccess, state => ({ ...state, basket: [] })),
  on(user.favoritesSuccess, (state, props) => ({ ...state, ...props }))
)

export function reducer(state: IUserState, action: Action): IUserState {
  return userReducer(state, action);
}

