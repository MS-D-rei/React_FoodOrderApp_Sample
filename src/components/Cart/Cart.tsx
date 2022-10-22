import React from 'react';
import Modal from '@/components/UI/Modal/Modal';
import {
  StyledCartActionDiv,
  StyledCartCloseButton,
  StyledCartItemsUL,
  StyledCartOrderButton,
  StyledCartTotalDiv,
} from '@/components/Cart/CartStyle';

interface CartProps {
  onHideCart: React.MouseEventHandler;
}

function Cart({ onHideCart }: CartProps) {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );

  return (
    <Modal onHideCart={onHideCart}>
      <StyledCartItemsUL>{cartItems}</StyledCartItemsUL>
      <StyledCartTotalDiv>
        <span>Total Amount</span>
        <span>35.62</span>
      </StyledCartTotalDiv>
      <StyledCartActionDiv>
        <StyledCartCloseButton onClick={onHideCart}>
          Close
        </StyledCartCloseButton>
        <StyledCartOrderButton>Order</StyledCartOrderButton>
      </StyledCartActionDiv>
    </Modal>
  );
}

export default Cart;
