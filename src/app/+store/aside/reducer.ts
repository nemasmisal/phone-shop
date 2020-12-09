import { Action, createReducer, on, props } from '@ngrx/store';
import { IArticle } from 'src/app/core/models';
import * as newest from './action';


interface INewestState {
  phone: IArticle | {};
  case: IArticle | {};
  screenProtector: IArticle | {};
  accessory: IArticle | {}
}

const initialState: INewestState = {
  phone: {},
  case: {},
  screenProtector: {},
  accessory: {}
}

const asideReducer = createReducer(
  initialState,
  on(newest.getNewestSuccess, (state, props) => ({ ...state, ...props.action}))
)

export const featureKey = 'aside';

export function reducer(state: INewestState, action: Action): INewestState {
  return asideReducer(state, action);
}