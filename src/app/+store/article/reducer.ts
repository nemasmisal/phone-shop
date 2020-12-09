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
  on(article.getAllSuccess, (state, props) => ({ ...state, ...props })),
  
  // on(article.likeArticleSuccess, (state, props ) => {
  //   const category = props.article.category;

  // })
)

export const featureKey = 'article';

export function reducer(state: IArticleState, action: Action): IArticleState {
  return articleReducer(state, action);
}