import { Action, createAction, props } from '@ngrx/store';
import { IArticle } from 'src/app/core/models';

export interface IAction extends Action {
  payload: any;
}

export const ActionTypes = {
  getPhones: '[Phones Page] Loading',
  getPhonesSuccess: '[Phones Page] Loading Success',
  getPhonesFailed: '[Phones Page] Loading Failed',
  getCases: '[Cases Page] Loading',
  getCasesSuccess: '[Cases Page] Loading Success',
  getCasesFailed: '[Cases Page] Loading Failed',
  getScreenProtectores: '[Screen Protectors Page] Loading',
  getScreenProtectorsSuccess: '[Screen Protectors Page] Loading Success',
  getScreenProtectorsFailed: '[Screen Protectors Page] Loading Failed',
  getAccessories: '[Accessories Page] Loading',
  getAccessoriesSuccess: '[Accessories Page] Loading Success',
  getAccessoriesFailed: '[Accessories Page] Loading Failed',
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
  getArticle: '[Get Article] Loading',
  getArticleSuccess: '[Get Article] Success',
  getArticleFailed: '[Get Article] Failed'
}

export const getPhones = createAction(ActionTypes.getPhones);
export const getPhonesSuccess = createAction(ActionTypes.getPhonesSuccess, props<{ payload }>());
export const getPhonesFailed = createAction(ActionTypes.getPhonesFailed, props<{ error: any }>())

export const getCases = createAction(ActionTypes.getCases);
export const getCasesSuccess = createAction(ActionTypes.getCasesSuccess, props<{ payload }>());
export const getCasesFailed = createAction(ActionTypes.getCasesFailed, props<{ error: any }>());

export const getScreenProtectors = createAction(ActionTypes.getScreenProtectores);
export const getScreenProtectorsSuccess = createAction(ActionTypes.getScreenProtectorsSuccess, props<{ payload }>());
export const getScreenProtectorsFailed = createAction(ActionTypes.getScreenProtectorsFailed, props<{ error: any }>())

export const getAccessories = createAction(ActionTypes.getAccessories);
export const getAccessoriesSuccess = createAction(ActionTypes.getAccessoriesSuccess, props<{ payload }>());
export const getAccessoriesFailed = createAction(ActionTypes.getAccessoriesFailed, props<{ error: any }>());

export const getCategory = createAction(ActionTypes.getAccessories);
export const getCategorySuccess = createAction(ActionTypes.getAccessoriesSuccess, props<{ payload }>());
export const getACategoryFailed = createAction(ActionTypes.getAccessoriesFailed, props<{ error: any }>());

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
export const likeArticleSuccess = createAction(ActionTypes.likeArticleSuccess);
export const likeArticleFailed = createAction(ActionTypes.likeArticleFailed, props<{ error: any }>());


