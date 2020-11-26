import { IArticle } from './article';
import { IBase } from './base';
import { IUser } from './user';

export interface IOrder extends IBase {
  creator: IUser;
  articles: IArticle[];
  totalAmount: number;
}
