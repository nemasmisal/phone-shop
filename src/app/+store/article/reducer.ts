import { Action, createReducer, on } from '@ngrx/store';
import { IArticle } from 'src/app/core/models';
import * as article from './action';

export interface IArticleState {
  phones: IArticle[];
  cases: IArticle[];
  screenProtectors: IArticle[];
  accessories: IArticle[];
}

const initialState: IArticleState = {
  phones: [],
  cases: [],
  screenProtectors: [],
  accessories: []
}

const articleReducer = createReducer(
  initialState,
  on(article.getPhones, state => ({ ...state})),
  on(article.getPhonesSuccess, (state, props) => ({ ...state, ...props })),
  on(article.getCases, state => ({ ...state})),
  on(article.getCasesSuccess, (state, props) => ({ ...state, ...props })),
  on(article.getScreenProtectors, state => ({ ...state})),
  on(article.getScreenProtectorsSuccess, (state, props) => ({ ...state, ...props })),
  on(article.getAccessories, state => ({ ...state})),
  on(article.getAccessoriesSuccess, (state, props) => ({ ...state, ...props }))
)

export function reducer(state: IArticleState, action: Action): IArticleState {
  return articleReducer(state, action);
}