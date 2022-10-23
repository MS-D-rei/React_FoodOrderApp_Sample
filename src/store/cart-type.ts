export interface CartContextType {
  items: CartItemType[];
  totalPrice: number;
  addItem: Function;
  removeItem: Function;
}

export interface CartState {
  items: CartItemType[];
  totalPrice: number;
}

export interface CartItemType {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export enum CartReducerActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export interface CartReducerAction {
  type: CartReducerActionTypes;
  payload: CartItemType | string;
}

export interface CartContextProps {
  children: React.ReactNode;
}