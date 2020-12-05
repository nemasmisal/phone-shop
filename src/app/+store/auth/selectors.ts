import { IAuthState } from '../models';

export const getUserId = (state: IAuthState) => state._id;
export const getUsername = (state: IAuthState) => state.username;
export const getAdmin = (state: IAuthState) => state.admin;