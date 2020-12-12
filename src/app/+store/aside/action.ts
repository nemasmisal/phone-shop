import { createAction, props } from '@ngrx/store';
import { IAsideState } from '../models';

export const ActionTypes = {
  getNewest: '[Get Newest Articles] Loading',
  getNewestSuccess: '[Get Newest Articles] Success',
  getNewestFailed: '[Get Newest Articles] Failed',
}

export const getNewest = createAction(ActionTypes.getNewest);
export const getNewestSuccess = createAction(ActionTypes.getNewestSuccess, props<{ action: IAsideState }>());
export const getANewestFailed = createAction(ActionTypes.getNewestFailed, props<{ error: any }>());