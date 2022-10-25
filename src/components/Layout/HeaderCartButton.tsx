import React, { useEffect, useState } from 'react';
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
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

  const cartCtx = useCartContext();
  const numberOfCartItems = cartCtx.items.reduce(
    (current, item) => current + item.amount,
    0
  );

  const cartButtonBumpClass = isButtonHighlighted ? 'bump' : '';

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setIsButtonHighlighted(true);
    const bumpResetTimer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(bumpResetTimer);
    };
  }, [cartCtx.items]);

  return (
    <StyledCartButton onClick={onClick} className={cartButtonBumpClass}>
      <StyledIconSpan>
        <CartIcon />
      </StyledIconSpan>
      <span>Your Cart</span>
      <StyledBadgeSpan>{numberOfCartItems}</StyledBadgeSpan>
    </StyledCartButton>
  );
}

export default HeaderCartButton;
