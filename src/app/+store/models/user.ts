import { Action } from '@ngrx/store';
import { IArticle } from 'src/app/core/models';

export interface IUser extends Action {
  username: string;
  password: string;
}

export interface IUserState {
  basket: IArticle[];
  favorites: IArticle[];
}