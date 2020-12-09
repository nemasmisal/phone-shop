import { IArticle } from './article';
import { IBase } from './base';

export interface INewestArticles extends IBase {
  phone: IArticle | null;
  case: IArticle | null;
  screenProtector: IArticle | null;
  accessory: IArticle | null;
}
