import React from 'react';
import CartIcon from '@/components/Cart/CartIcon';
import {
  StyledBadgeSpan,
  StyledCartButton,
  StyledIconSpan,
} from '@/components/Layout/HeaderCartButtonStyle';

interface HeaderCartButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function HeaderCartButton({ onClick }: HeaderCartButtonProps) {
  return (
    <StyledCartButton onClick={onClick}>
      <StyledIconSpan>
        <CartIcon />
      </StyledIconSpan>
      <span>Your Cart</span>
      <StyledBadgeSpan>3</StyledBadgeSpan>
    </StyledCartButton>
  );
}

export default HeaderCartButton;
