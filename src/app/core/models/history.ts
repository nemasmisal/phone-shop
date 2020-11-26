import { IBase } from './base';

export interface IHistory extends IBase {
  order: string[];
  totalAmount: number;
}
