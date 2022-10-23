import React from 'react';
import CartIcon from '@/components/Cart/CartIcon';
import {
  StyledBadgeSpan,
  StyledCartButton,
  StyledIconSpan,
} from '@/components/Layout/HeaderCartButtonStyle';
import { useCartContext } from '@/store/cart-context';

interface HeaderCartButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function HeaderCartButton({ onClick }: HeaderCartButtonProps) {
  const cartCtx = useCartContext();
  const numberOfCartItems = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  return (
    <StyledCartButton onClick={onClick}>
      <StyledIconSpan>
        <CartIcon />
      </StyledIconSpan>
      <span>Your Cart</span>
      <StyledBadgeSpan>{numberOfCartItems}</StyledBadgeSpan>
    </StyledCartButton>
  );
}

export default HeaderCartButton;
