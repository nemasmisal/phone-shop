import { Action, createReducer, on } from '@ngrx/store';
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
  on(article.getArticlesSuccess, (state, { articles }) => {
    const articlesObj = articles.reduce((acc, curr) => {
      acc[curr.category].push(curr);
      return acc;
    }, { phones: [], cases: [], accessories: [], screenProtectors: [] });
    return { ...state, ...articlesObj }
  })
)

export const featureKey = 'article';

export function reducer(state: IArticleState, action: Action): IArticleState {
  return articleReducer(state, action);
}