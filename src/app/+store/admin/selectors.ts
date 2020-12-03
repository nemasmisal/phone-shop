import { IAdminState } from './reducer';

export const getOrders = (state: IAdminState) => state.orders;
export const getHistoryOrders = (state: IAdminState) => state.historyOrders;