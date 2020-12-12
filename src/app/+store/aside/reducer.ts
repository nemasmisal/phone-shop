import { Action, createReducer, on, props } from '@ngrx/store';
import * as newest from './action';
import { IAsideState } from '../models';
import { IArticle } from 'src/app/core/models'

const initialState: IAsideState = {
  phone: {},
  case: {},
  screenProtector: {},
  accessory: {}
}

const asideReducer = createReducer(
  initialState,
  on(newest.getNewestSuccess, (state, props) => ({ ...state, ...props.action }))
)

export const featureKey = 'aside';

export function reducer(state: IAsideState, action: Action): IAsideState {
  return asideReducer(state, action);
}