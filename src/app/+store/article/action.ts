import { createAction, props } from '@ngrx/store';
import { IArticle } from 'src/app/core/models';

export const ActionTypes = {
  getArticles: '[Get All Articles] Loading',
  getArticlesSuccess: '[Get All Articles] Success',
  getArticlesFailed: '[Get All Articles] Failed',
  getCategory: '[Category Page] Loading',
  getCategorySuccess: '[Category Page] Loading Success',
  getCategoryFailed: '[Category Page] Loading Failed',
  createArticle: '[Create Article Page] Loading',
  createArticleSuccess: '[Create Article] Success',
  createArticleFailed: '[Create Article] Failed',
  editArticle: '[Edit Article Page] Loading',
  editArticleSuccess: '[Edit Article] Success',
  editArticleFailed: '[Edit Article] Failed',
  removeArticle: '[Remove Article Page] Loading',
  removeArticleSuccess: '[Remove Article] Success',
  removeArticleFailed: '[Remove Article] Failed',
  likeArticle: '[Like Article] Loading',
  likeArticleSuccess: '[Like Article] Success',
  likeArticleFailed: '[Like Article] Failed',
}

export const getArticles = createAction(ActionTypes.getArticles);
export const getArticlesSuccess = createAction(ActionTypes.getArticlesSuccess, props<{ articles: IArticle[] }>());
export const getArticlesFailed = createAction(ActionTypes.getArticlesFailed, props<{ error: any }>());

export const getCategory = createAction(ActionTypes.getCategory);
export const getCategorySuccess = createAction(ActionTypes.getCategorySuccess, props<{ payload }>());
export const getACategoryFailed = createAction(ActionTypes.getCategoryFailed, props<{ error: any }>());


export const createArticle = createAction(ActionTypes.createArticle, props<{ payload: IArticle }>());
export const createArticleSuccess = createAction(ActionTypes.createArticleSuccess);
export const createArticleFailed = createAction(ActionTypes.createArticleFailed, props<{ error: any }>());

export const editArticle = createAction(ActionTypes.editArticle, props<{ id: string, payload: IArticle }>());
export const editArticleSuccess = createAction(ActionTypes.editArticleSuccess);
export const editArticleFailed = createAction(ActionTypes.editArticleFailed, props<{ error: any }>());

export const removeArticle = createAction(ActionTypes.removeArticle, props<{ id: string }>());
export const removeArticleSuccess = createAction(ActionTypes.removeArticleSuccess);
export const removeArticleFailed = createAction(ActionTypes.removeArticleFailed, props<{ error: any }>());

export const likeArticle = createAction(ActionTypes.likeArticle, props<{ id: string }>());
export const likeArticleSuccess = createAction(ActionTypes.likeArticleSuccess, props<{ article: IArticle }>());
export const likeArticleFailed = createAction(ActionTypes.likeArticleFailed, props<{ error: any }>());