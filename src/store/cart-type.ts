import { Meal } from '@/components/Meals/types'

export interface CartContextType {
  items: CartItem[];
  totalPrice: number;
  addItem: Function;
  removeItem: Function;
}

export interface CartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}

export enum CartReducerActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export interface CartReducerAction {
  type: CartReducerActionTypes;
  payload: CartItem | string;
}

export interface CartContextProps {
  children: React.ReactNode;
}