import { IState } from '../models';

export const getUserId = (state: IState) => state._id;
export const getUsername = (state: IState) => state.username;
export const getAdmin = (state: IState) => state.admin;