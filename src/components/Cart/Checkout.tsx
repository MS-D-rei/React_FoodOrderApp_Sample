import React from 'react';
import { CheckoutActionsDiv, CheckoutCancelButton, CheckoutControlDiv, CheckoutFormDiv, CheckoutSubmitButton } from '@/components/Cart/CheckoutStyle';

interface CheckoutProps {
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
}

function Checkout({ onCancel }: CheckoutProps) {
  const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <CheckoutFormDiv>
      <CheckoutControlDiv>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </CheckoutControlDiv>
      <CheckoutControlDiv>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </CheckoutControlDiv>
      <CheckoutControlDiv>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </CheckoutControlDiv>
      <CheckoutControlDiv>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </CheckoutControlDiv>
      <CheckoutActionsDiv>
        <CheckoutCancelButton type="button" onClick={onCancel}>
          Cancel
        </CheckoutCancelButton>
        <CheckoutSubmitButton type="submit">Confirm</CheckoutSubmitButton>
      </CheckoutActionsDiv>
    </CheckoutFormDiv>
  );
}

export default Checkout;
