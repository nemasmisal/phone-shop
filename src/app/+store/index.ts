import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from './models';
import * as auth from './auth/selectors';
import * as user from './user/selectors';
import * as article from './article/selectors'
     
export interface IAppState {
  auth: IState;
}
 
export const getAuthStore = createFeatureSelector('auth');
export const getAuthUsername = createSelector(getAuthStore, auth.getUsername);
export const getAuthUserId = createSelector(getAuthStore, auth.getUserId);
export const getAuthAdmin = createSelector(getAuthStore, auth.getAdmin);
export const isLogged = createSelector(getAuthUserId, userId => !!userId);

export const getUserStore = createFeatureSelector('user');
export const getUserBasket = createSelector(getUserStore, user.getBasket);
export const getUserFavorites = createSelector(getUserStore, user.getFavorites);

export const getArticleStore = createFeatureSelector('article');
export const getPhones = createSelector(getArticleStore, article.getPhones);
export const getCases = createSelector(getArticleStore, article.getCases);
export const getScreenProtectors = createSelector(getArticleStore, article.getScreenProtectors);
export const getAccessories = createSelector(getArticleStore, article.getAccessories);