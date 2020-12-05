import { IUserState } from '../models';

export const getBasket = (state: IUserState) => state.basket;
export const getFavorites = (state: IUserState) => state.favorites;
