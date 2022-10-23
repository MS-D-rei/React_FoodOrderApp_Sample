import React, { useReducer } from 'react';
import {
  CartContextType,
  CartState,
  CartReducerActionTypes,
  CartReducerAction,
  CartContextProps,
  CartItem,
} from '@/store/cart-type';

const CartContext = React.createContext<CartContextType>({
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
});

const cartReducer = (
  state: CartState,
  action: CartReducerAction
): CartState => {
  switch (action.type) {
    case CartReducerActionTypes.ADD_ITEM:
      const actionPayload = action.payload as CartItem;
      const afterAddItems = state.items.concat(actionPayload);
      const afterAddTotalPrice =
        state.totalPrice + actionPayload.price * actionPayload.amount;
      return {
        items: afterAddItems,
        totalPrice: afterAddTotalPrice,
      };

    case CartReducerActionTypes.REMOVE_ITEM:
      return;
    default:
      break;
  }
};

const defaultCartState: CartContextType = {
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
};

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({
      type: CartReducerActionTypes.ADD_ITEM,
      payload: item,
    });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({
      type: CartReducerActionTypes.REMOVE_ITEM,
      payload: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const ctx = React.useContext(CartContext);
  if (ctx === undefined) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return ctx;
};
