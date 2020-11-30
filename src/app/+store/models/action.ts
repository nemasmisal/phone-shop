import { Action } from '@ngrx/store';

export interface IAction extends Action {
  username: string;
  password: string;
}