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
  clearItems: () => {},
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
      let cartItemsAfterAdded: CartItemType[];

      // Calculate state.items
      if (existingCartItem) {
        const updateTargetItemInfo = {
          ...existingCartItem,
          amount: existingCartItem.amount + dispatchedCartItem.amount,
        };
        cartItemsAfterAdded = [...state.items];
        cartItemsAfterAdded[existingCartItemIndex] = updateTargetItemInfo;
      } else {
        cartItemsAfterAdded = state.items.concat(dispatchedCartItem);
      }

      // Calculate state.totalPrice
      const totalPriceAfterAdded =
        state.totalPrice + dispatchedCartItem.price * dispatchedCartItem.amount;

      return {
        items: cartItemsAfterAdded,
        totalPrice: totalPriceAfterAdded,
      };

    case CartReducerActionTypes.REMOVE_ITEM:
      const dispatchedCartItemID = action.payload as string;
      const removeTargetCartItemIndex = state.items.findIndex(
        (item) => item.id === dispatchedCartItemID
      );
      const removeTargetCartItem = state.items[removeTargetCartItemIndex];
      let cartItemsAfterRemoved: CartItemType[];

      // Calculate state.items
      if (removeTargetCartItem.amount === 1) {
        cartItemsAfterRemoved = state.items.filter(
          (item) => item.id != dispatchedCartItemID
        );
      } else {
        const removeTargetCartItemInfo = {
          ...removeTargetCartItem,
          amount: removeTargetCartItem.amount - 1,
        };
        cartItemsAfterRemoved = [...state.items];
        cartItemsAfterRemoved[removeTargetCartItemIndex] =
          removeTargetCartItemInfo;
      }

      // Calculate state.totalPrice
      const totalPriceAfterRemoved =
        state.totalPrice - removeTargetCartItem.price;

      return {
        items: cartItemsAfterRemoved,
        totalPrice: totalPriceAfterRemoved,
      };
    case CartReducerActionTypes.CLEAR_ITEMS:
      return {
        items: [],
        totalPrice: 0,
      };
  }
};

const defaultCartState: CartContextType = {
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
  clearItems: () => {},
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

  const clearItemsFromCartHandler = () => {
    dispatchCartAction({
      type: CartReducerActionTypes.CLEAR_ITEMS,
      payload: '',
    });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearItems: clearItemsFromCartHandler,
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
