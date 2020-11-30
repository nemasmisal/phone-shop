import { IState } from './reducer';

export const getUserId = (state: IState) => state._id;
export const getUsername = (state: IState) => state.username;
export const getBasket = (state: IState) => state.basket;
export const getFavorites = (state: IState) => state.favorites;
export const getAdmin = (state: IState) => state.admin;
