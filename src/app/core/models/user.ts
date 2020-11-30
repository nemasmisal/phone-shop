import { IArticle } from './article';
import { IBase } from './base';

export interface IUser extends IBase {
    admin: boolean;
    username: string;
    favorites: IArticle[];
    basket: IArticle[];
    userId: string;
}