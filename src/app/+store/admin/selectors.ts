import { IUser } from 'src/app/core/models';
import { IAdminState } from '../models';

export const getOrders = (state: IAdminState) => state.orders;
export const getHistoryOrders = (state: IAdminState) => state.historyOrders;
export const getUsers = (state: IAdminState) => state.users;
export const getUser = (state: IAdminState, { id }): IUser => state.users.find(u => u._id === id);