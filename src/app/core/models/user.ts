import { IArticle } from './article';
import { IBase } from './base';

export interface IUser extends IBase {
    admin: string;
    username: string;
    favorites: IArticle[];
    basket: IArticle[];
}