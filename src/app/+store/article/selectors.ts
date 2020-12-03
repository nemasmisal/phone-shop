import { IArticleState } from './reducer';

export const getPhones = (state: IArticleState) => state.phones;
export const getCases = (state: IArticleState) => state.cases;
export const getScreenProtectors = (state: IArticleState) => state.screenProtectors;
export const getAccessories = (state: IArticleState) => state.accessories;