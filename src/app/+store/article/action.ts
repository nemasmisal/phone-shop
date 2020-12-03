import { Action, createAction, props } from '@ngrx/store';
import { IArticle } from 'src/app/core/models/article'

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
