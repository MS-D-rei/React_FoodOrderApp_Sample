import React, { useEffect, useState } from 'react';
import Modal from '@/components/UI/Modal/Modal';
import {
  StyledCartActionDiv,
  StyledCartCloseButton,
  StyledCartItemsUL,
  StyledCartOrderButton,
  StyledCartTotalDiv,
} from '@/components/Cart/CartStyle';
import { useCartContext } from '@/store/cart-context';
import CartItem from '@/components/Cart/CartItem';
import { CartItemType } from '@/store/cart-type';
import Checkout from '@/components/Cart/Checkout';

interface CartProps {
  onHideCart: React.MouseEventHandler;
}

function Cart({ onHideCart }: CartProps) {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useCartContext();
  const totalPrice = `$${cartCtx.totalPrice.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const increaseCartItemHandler = (item: CartItemType) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const decreaseCartItemHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  /* bind ( Partial function ) */
  /* https://javascript.info/bind#partial-functions */
  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={increaseCartItemHandler.bind(null, item)}
      onRemove={decreaseCartItemHandler.bind(null, item.id)}
    />
  ));

  const modalActions = (
    <StyledCartActionDiv>
      <StyledCartCloseButton onClick={onHideCart}>Close</StyledCartCloseButton>
      {hasItems && (
        <StyledCartOrderButton onClick={orderHandler}>
          Order
        </StyledCartOrderButton>
      )}
    </StyledCartActionDiv>
  );

  return (
    <Modal onHideCart={onHideCart}>
      <StyledCartItemsUL>{cartItems}</StyledCartItemsUL>
      <StyledCartTotalDiv>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </StyledCartTotalDiv>
      {isCheckout && <Checkout onCancel={onHideCart} />}
      {!isCheckout && modalActions}
    </Modal>
  );
}

export default Cart;
