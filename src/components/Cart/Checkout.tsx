import React, { useRef, useState } from 'react';
import {
  CheckoutActionsDiv,
  CheckoutCancelButton,
  CheckoutControlDiv,
  CheckoutForm,
  CheckoutSubmitButton,
} from '@/components/Cart/CheckoutStyle';
import { UserAddress } from '@/components/Cart/types';

const isEmpty = (value: string) => value.trim().length === 0;
const is7DigitsPostalCode = (value: string) => value.trim().length === 7;

interface CheckoutProps {
  onConfirm: (userAddress: UserAddress) => void;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
}

function Checkout({ onConfirm, onCancel }: CheckoutProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let enteredName = '';
    let enteredStreet = '';
    let enteredPostal = '';
    let enteredCity = '';

    let isValidName = false;
    let isValidStreet = false;
    let isValidPostal = false;
    let isValidCity = false;

    if (nameInputRef.current) {
      enteredName = nameInputRef.current?.value;
      isValidName = !isEmpty(enteredName);
    }
    if (streetInputRef.current) {
      enteredStreet = streetInputRef.current.value;
      isValidStreet = !isEmpty(enteredStreet);
    }
    if (postalInputRef.current) {
      enteredPostal = postalInputRef.current.value;
      isValidPostal = is7DigitsPostalCode(enteredPostal);
    }
    if (cityInputRef.current) {
      enteredCity = cityInputRef.current.value;
      isValidCity = !isEmpty(enteredCity);
    }

    setFormValidity({
      name: isValidName,
      street: isValidStreet,
      postal: isValidPostal,
      city: isValidCity,
    });

    const formIsValid =
      isValidName && isValidStreet && isValidPostal && isValidCity;

    if (!formIsValid) {
      return;
    }
    // submit data
    onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  const controlDivClassName = (type: 'name' | 'street' | 'postal' | 'city') => {
    return formValidity[type] ? '' : 'invalid';
  };

  return (
    <CheckoutForm onSubmit={confirmHandler}>
      <CheckoutControlDiv className={controlDivClassName('name')}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Please enter your name</p>}
      </CheckoutControlDiv>
      <CheckoutControlDiv className={controlDivClassName('street')}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>Please enter street name</p>}
      </CheckoutControlDiv>
      <CheckoutControlDiv className={controlDivClassName('postal')}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formValidity.postal && <p>Please enter postal code</p>}
      </CheckoutControlDiv>
      <CheckoutControlDiv className={controlDivClassName('city')}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Please enter city name</p>}
      </CheckoutControlDiv>
      <CheckoutActionsDiv>
        <CheckoutCancelButton type="button" onClick={onCancel}>
          Cancel
        </CheckoutCancelButton>
        <CheckoutSubmitButton type="submit">Confirm</CheckoutSubmitButton>
      </CheckoutActionsDiv>
    </CheckoutForm>
  );
}

export default Checkout;
