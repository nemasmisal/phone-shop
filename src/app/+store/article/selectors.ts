import { IArticle } from 'src/app/core/models';
import { IArticleState } from '../models';

export const getPhones = (state: IArticleState) => state.phones;
export const getCases = (state: IArticleState) => state.cases;
export const getScreenProtectors = (state: IArticleState) => state.screenProtectors;
export const getAccessories = (state: IArticleState) => state.accessories;
export const getArticleState = (state: IArticleState) => state;
export const getCategory = (state: IArticleState, { name }) => state[name];
export const getArticleById = (state: IArticleState, { category, articleId }) => state[category].find((x: IArticle) => x._id === articleId);


