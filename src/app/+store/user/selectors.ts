import { IUserState } from './reducer';

export const getBasket = (state: IUserState) => state.basket;
export const getFavorites = (state: IUserState) => state.favorites;