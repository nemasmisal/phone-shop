import { Action, createReducer, on, props } from '@ngrx/store';
import * as article from './action';
import { IArticleState } from '../models'

const initialState: IArticleState = {
  phones: [],
  cases: [],
  screenProtectors: [],
  accessories: []
}

const articleReducer = createReducer(
  initialState,
  on(article.getAllSuccess, (state, props) => ({ ...state, ...props }))
)

export function reducer(state: IArticleState, action: Action): IArticleState {
  return articleReducer(state, action);
}