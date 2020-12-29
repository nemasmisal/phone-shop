import { createAction, props } from '@ngrx/store';
import { IArticle } from 'src/app/core/models';

export const ActionTypes = {
  getArticles: '[Get All Articles] Loading',
  getArticlesSuccess: '[Get All Articles] Success',
  getArticlesFailed: '[Get All Articles] Failed',
  createArticle: '[Create Article]',
  createArticleSuccess: '[Create Article] Success',
  createArticleFailed: '[Create Article] Failed',
  editArticle: '[Edit Article] Loading',
  editArticleSuccess: '[Edit Article] Success',
  editArticleFailed: '[Edit Article] Failed',
  removeArticle: '[Remove Article] Loading',
  removeArticleSuccess: '[Remove Article] Success',
  removeArticleFailed: '[Remove Article] Failed',
  likeArticle: '[Like Article] Loading',
  likeArticleSuccess: '[Like Article] Success',
  likeArticleFailed: '[Like Article] Failed',
}

export const getArticles = createAction(ActionTypes.getArticles);
export const getArticlesSuccess = createAction(ActionTypes.getArticlesSuccess, props<{ articles: IArticle[] }>());
export const getArticlesFailed = createAction(ActionTypes.getArticlesFailed, props<{ error: any }>());

export const createArticle = createAction(ActionTypes.createArticle, props<{ payload: IArticle }>());
export const createArticleSuccess = createAction(ActionTypes.createArticleSuccess);
export const createArticleFailed = createAction(ActionTypes.createArticleFailed, props<{ error: any }>());

export const editArticle = createAction(ActionTypes.editArticle, props<{ payload: { id: string, article: IArticle } }>());
export const editArticleSuccess = createAction(ActionTypes.editArticleSuccess);
export const editArticleFailed = createAction(ActionTypes.editArticleFailed, props<{ error: any }>());

export const removeArticle = createAction(ActionTypes.removeArticle, props<{ payload: { id: string } }>());
export const removeArticleSuccess = createAction(ActionTypes.removeArticleSuccess);
export const removeArticleFailed = createAction(ActionTypes.removeArticleFailed, props<{ error: any }>());

export const likeArticle = createAction(ActionTypes.likeArticle, props<{ payload: { id: string } }>());
export const likeArticleSuccess = createAction(ActionTypes.likeArticleSuccess, props<{ payload: { article: IArticle } }>());
export const likeArticleFailed = createAction(ActionTypes.likeArticleFailed, props<{ error: any }>());