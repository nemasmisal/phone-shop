import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from './auth/reducer'
import * as auth from './auth/selectors'
     
export interface IAppState {
  auth: IState;
}
 
export const getAuthStore = createFeatureSelector('auth');
export const getAuthUsername = createSelector(getAuthStore, auth.getUsername);
export const getAuthUserId = createSelector(getAuthStore, auth.getUserId);
export const getAuthAdmin = createSelector(getAuthStore, auth.getAdmin);
export const getAuthBasket = createSelector(getAuthStore, auth.getBasket);
export const getAuthFavorites = createSelector(getAuthStore, auth.getFavorites);

