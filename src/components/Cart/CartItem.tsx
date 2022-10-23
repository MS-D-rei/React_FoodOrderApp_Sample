import React from 'react';
import {
  StyledCartItemLI,
  StyledCartItemH2,
  StyledCartItemSummaryDiv,
  StyledCartItemPriceSpan,
  StyledCartItemAmoutSpan,
  StyledCartItemActionsDiv,
  StyledCartItemButton,
} from '@/components/Cart/CartItemStyle';

interface CartItemProps {
  id: string;
  name: string;
  amount: number;
  price: number;
  onAdd: React.MouseEventHandler<HTMLButtonElement>;
  onRemove: React.MouseEventHandler<HTMLButtonElement>;
}

function CartItem({ id, name, amount, price, onAdd, onRemove }: CartItemProps) {
  const cartItemPrice = `$${price.toFixed(2)}`;

  return (
    <StyledCartItemLI id={id}>
      <div>
        <StyledCartItemH2>{name}</StyledCartItemH2>
        <StyledCartItemSummaryDiv>
          <StyledCartItemPriceSpan>{cartItemPrice}</StyledCartItemPriceSpan>
          <StyledCartItemAmoutSpan>{amount}</StyledCartItemAmoutSpan>
        </StyledCartItemSummaryDiv>
      </div>
      <StyledCartItemActionsDiv>
        <StyledCartItemButton onClick={onRemove}>-</StyledCartItemButton>
        <StyledCartItemButton onClick={onAdd}>+</StyledCartItemButton>
      </StyledCartItemActionsDiv>
    </StyledCartItemLI>
  );
}

export default CartItem;
