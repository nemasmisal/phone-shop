import { IArticle } from './article';

export interface IUser {
    admin: string;
    username: string;
    id: string;
    favorites: IArticle[];
    basket: IArticle[];
}