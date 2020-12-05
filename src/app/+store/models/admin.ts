import { IOrder, IHistory, IUser } from 'src/app/core/models';

export interface IAdminState {
  orders: IOrder[];
  historyOrders: IHistory[];
  users: IUser[];
}