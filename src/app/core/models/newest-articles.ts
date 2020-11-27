import { IArticle } from './article';
import { IBase } from './base';

export interface INewestArticles extends IBase {
  phone: IArticle;
  case: IArticle;
  screenProtector: IArticle;
  accessory: IArticle;
}
