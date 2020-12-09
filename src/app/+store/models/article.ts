import { IArticle, INewestArticles } from 'src/app/core/models';

export interface IArticleState {
  phones: IArticle[];
  cases: IArticle[];
  screenProtectors: IArticle[];
  accessories: IArticle[];
}