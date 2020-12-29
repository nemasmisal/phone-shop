import { createAction, props } from '@ngrx/store';
import { IArticle } from 'src/app/core/models/article';

export const ActionTypes = {
  getBasket: '[User Basket Page] Loading',
  getBasketSuccess: '[User Basket Page] Loading Success',
  getBasketFailed: '[User Basket Page] Loading Failed',
  addToBasket: '[Add To Basket] Loading',
  addToBasketSuccess: '[Add To Basket] Adding Success',
  addToBasketFailed: '[Add To Basket] Adding Failed',
  removeFromBasket: '[Remove From Basket] Loading',
  removeFromBasketSuccess: '[Remove From Basket] Removing Success',
  removeFromBasketFailed: '[Remove From Basket] Removing Failed',
  orderBasket: '[Place Order From Basket] Loading',
  orderBasketSuccess: '[Place Order From Basket] Ordering Success',
  orderBasketFailed: '[Place Order From Basket] Ordering Failed',
  getFavorites: '[User Favorites Page] Loading',
  getFavoritesSuccess: '[User Favorites Page] Loading Success',
  getFavoritesFailed: '[User Favorites Page] Loading Failed',
  addToFavorites: '[Add To Favorites] Loading',
  addToFavoritesSuccess: '[Add To Favorites] Adding Success',
  addToFavoritesFailed: '[Add To Favorites] Adding Failed',
  removeFromFavorites: '[Remove From Favorites] Loading',
  removeFromFavoritesSuccess: '[Remove From Favorites] Removing Success',
  removeFromFavoritesFailed: '[Remove From Favorites] Removing Failed',
  getProfile: '[User Profile Page] Loading',
  getProfileSuccess: '[User Profile Page] Loading Success',
  getProfileFailed: '[User Profile Page] Loading Failed',
}

export const basket = createAction(ActionTypes.getBasket);
export const basketSuccess = createAction(ActionTypes.getBasketSuccess, props<{ basket: IArticle[] }>());
export const basketFailed = createAction(ActionTypes.getBasketFailed, props<{ error: any }>());

export const addToBasket = createAction(ActionTypes.addToBasket, props<{ payload: { id: string } }>());
export const addToBasketSuccess = createAction(ActionTypes.addToBasket);
export const addToBasketFailed = createAction(ActionTypes.addToBasket, props<{ error: string }>());

export const removeFromBasket = createAction(ActionTypes.removeFromBasket, props<{ payload: { id: string } }>());
export const removefromBasketSuccess = createAction(ActionTypes.removeFromBasketSuccess, props<{ payload }>());
export const removeFromBasketFailed = createAction(ActionTypes.removeFromBasketFailed, props<{ error: string }>());

export const orderBasket = createAction(ActionTypes.orderBasket);
export const orderBasketSuccess = createAction(ActionTypes.orderBasketSuccess);
export const orderBasketFailed = createAction(ActionTypes.orderBasketFailed, props<{ error: string }>());

export const favorites = createAction(ActionTypes.getFavorites);
export const favoritesSuccess = createAction(ActionTypes.getFavoritesSuccess, props<{ favorites: [] }>());
export const favoritestFailed = createAction(ActionTypes.getFavoritesFailed, props<{ error: string }>());

export const addToFavorites = createAction(ActionTypes.addToFavorites, props<{ payload: { id: string } }>());
export const addToFavoritesSuccess = createAction(ActionTypes.addToFavorites);
export const addToFavoritesFailed = createAction(ActionTypes.addToFavoritesFailed, props<{ error: string }>());

export const removeFromFavorites = createAction(ActionTypes.removeFromFavorites, props<{ payload: { id: string } }>());
export const removeFromFavoritesSuccess = createAction(ActionTypes.removeFromFavoritesSuccess, props<{ payload }>());
export const removeFromFavoritesFailed = createAction(ActionTypes.removeFromFavoritesFailed, props<{ error: string }>());
