import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as authSelector from './auth/selectors';
import * as userSelector from './user/selectors';
import * as articleSelector from './article/selectors';
import * as adminSelector from './admin/selectors';
import * as asidetSelector from './aside/selectors';

export const getAuthStore = createFeatureSelector('auth');
export const auth = {
  username: createSelector(getAuthStore, authSelector.getUsername),
  userId: createSelector(getAuthStore, authSelector.getUserId),
  admin: createSelector(getAuthStore, authSelector.getAdmin),
  isLogged: () => {
   return createSelector(auth.userId, userId => !!userId);
  }
}

export const getUserStore = createFeatureSelector('user');
export const user = {
  basket: createSelector(getUserStore, userSelector.getBasket),
  favorites: createSelector(getUserStore, userSelector.getFavorites)
}

export const getArticleStore = createFeatureSelector('article');
export const article = {
  article: createSelector(getArticleStore, articleSelector.getArticleById),
  all: createSelector(getArticleStore, articleSelector.getArticleState),
  category: createSelector(getArticleStore, articleSelector.getCategory),
  phones: createSelector(getArticleStore, articleSelector.getPhones),
  cases: createSelector(getArticleStore, articleSelector.getCases),
  screenProtectors: createSelector(getArticleStore, articleSelector.getScreenProtectors),
  accessories: createSelector(getArticleStore, articleSelector.getAccessories),
  topLiked: createSelector(getArticleStore, articleSelector.topThreeLiked)
}

export const getAdminStore = createFeatureSelector('admin');
export const admin = {
  orders: createSelector(getAdminStore, adminSelector.getOrders),
  historyOrders: createSelector(getAdminStore, adminSelector.getHistoryOrders),
  users: createSelector(getAdminStore, adminSelector.getUsers),
  userById: createSelector(getAdminStore, adminSelector.getUser)
}

export const getAsideStore = createFeatureSelector('aside');
export const aside = {
  newest: createSelector(getAsideStore, asidetSelector.getNewest)
}
