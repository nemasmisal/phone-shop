import { createAction, props } from '@ngrx/store';
import { IArticle } from 'src/app/core/models/article'

export const ActionTypes = {
  getBasket: '[User Basket Page] Loading',
  getBasketSuccess: '[User Basket Page] Loading Success',
  getBasketFailed: '[User Basket Page] Loading Failed',
  getFavorites: '[User Favorites Page] Loading',
  getFavoritesSuccess: '[User Favorites Page] Loading Success',
  getFavoritesFailed: '[User Favorites Page] Loading Failed'
}

export const basket = createAction(ActionTypes.getBasket);
export const basketSuccess = createAction(ActionTypes.getBasketSuccess, props<{ basket: IArticle[] }>());
export const basketFailed = createAction(ActionTypes.getBasketFailed, props<{ error: any }>());

export const favorites = createAction(ActionTypes.getFavorites);
export const favoritesSuccess = createAction(ActionTypes.getFavoritesSuccess, props<{ favorites: [] }>());
export const favoritestFailed = createAction(ActionTypes.getFavoritesFailed, props<{ error: any }>());