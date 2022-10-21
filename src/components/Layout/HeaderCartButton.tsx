import CartIcon from "@/components/Cart/CartIcon";
import { StyledBadgeSpan, StyledCartButton, StyledIconSpan } from "@/components/Layout/HeaderCartButtonStyle";

function HeaderCartButton() {
  return (
    <StyledCartButton>
      <StyledIconSpan><CartIcon /></StyledIconSpan>
      <span>Your Cart</span>
      <StyledBadgeSpan>3</StyledBadgeSpan>
    </StyledCartButton>
  )
}

export default HeaderCartButton;