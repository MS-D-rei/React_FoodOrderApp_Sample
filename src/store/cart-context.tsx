import React, { useReducer } from 'react';
import {
  CartContextType,
  CartState,
  CartReducerActionTypes,
  CartReducerAction,
  CartContextProps,
  CartItemType,
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
      const dispatchedCartItem = action.payload as CartItemType;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === dispatchedCartItem.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let afterAddingCartItems: CartItemType[];

      // calculate state.items
      if (existingCartItem) {
        const updateTargetItemInfo = {
          ...existingCartItem,
          amount: existingCartItem.amount + dispatchedCartItem.amount,
        }
        afterAddingCartItems = [...state.items];
        afterAddingCartItems[existingCartItemIndex] = updateTargetItemInfo;
      } else {
        afterAddingCartItems = state.items.concat(dispatchedCartItem);
      }

      // calculate state.totalPrice
      const afterAddTotalPrice =
        state.totalPrice + dispatchedCartItem.price * dispatchedCartItem.amount;

      return {
        items: afterAddingCartItems,
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

  const addItemToCartHandler = (item: CartItemType) => {
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
