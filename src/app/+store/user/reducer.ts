import { Action, createReducer, on } from '@ngrx/store';
import * as user from './actions';
import { IArticle } from 'src/app/core/models';
import { IUserState } from '../models'


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
    return { ...state, basket };
  }),
  on(user.removeFromBasketFailed, (state, props) => ({ ...state, ...props })),
  on(user.orderBasketSuccess, state => ({ ...state, basket: [] })),
  on(user.favoritesSuccess, (state, props) => ({ ...state, ...props })),
  on(user.removeFromFavorites, (state, { payload }) => {
    const favorites = state.favorites.filter((article: IArticle) => article._id !== payload);
    return { ...state, favorites };
  })
)

export const featureKey = 'user';

export function reducer(state: IUserState, action: Action): IUserState {
  return userReducer(state, action);
}

