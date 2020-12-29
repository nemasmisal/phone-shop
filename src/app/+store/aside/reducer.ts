import { Action, createReducer, on } from '@ngrx/store';
import * as newest from './action';
import { IAsideState } from '../models';

const initialState: IAsideState = {
  phone: { _id: '', name: '', category: '', description: '', price: 1, quantity: 1, imageURL: '', comments: [''], creator: '', likes: [''], created_at: '', updatedAt: '', __v: 0 },
  case: { _id: '', name: '', category: '', description: '', price: 1, quantity: 1, imageURL: '', comments: [''], creator: '', likes: [''], created_at: '', updatedAt: '', __v: 0 },
  screenProtector: { _id: '', name: '', category: '', description: '', price: 1, quantity: 1, imageURL: '', comments: [''], creator: '', likes: [''], created_at: '', updatedAt: '', __v: 0 },
  accessory: { _id: '', name: '', category: '', description: '', price: 1, quantity: 1, imageURL: '', comments: [''], creator: '', likes: [''], created_at: '', updatedAt: '', __v: 0 }
}

const asideReducer = createReducer(
  initialState,
  on(newest.getNewestSuccess, (state, { articles }) => ({ ...state, ...articles }))
)

export const featureKey = 'aside';

export function reducer(state: IAsideState, action: Action): IAsideState {
  return asideReducer(state, action);
}