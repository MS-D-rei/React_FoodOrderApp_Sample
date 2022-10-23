import Input from '@/components/UI/Input';
import React, { useRef, useState } from 'react';
import {
  StyledMealItemForm,
  StyledMealItemFormButton,
} from './MealItemFormStyle';

interface MealItemFormProps {
  id: string;
  onAddItemToCart: Function;
}

function MealItemForm({ id, onAddItemToCart }: MealItemFormProps) {
  // https://beta.reactjs.org/apis/react/useRef
  const amountInputRef = useRef<HTMLInputElement>(null);

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current?.value;
    const enteredAmountNumber = () => {
      if (amountInputRef.current) {
        return +amountInputRef.current.value;
      }
      return 0;
    };

    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNumber() < 1 ||
      enteredAmountNumber() > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    setAmountIsValid(true);
    onAddItemToCart(enteredAmountNumber);
  };

  return (
    <StyledMealItemForm onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        id={id}
        label="Amount"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <StyledMealItemFormButton>+ Add</StyledMealItemFormButton>
      {!amountIsValid && <p>Please enter a valid amount (1 - 5).</p>}
    </StyledMealItemForm>
  );
}

export default MealItemForm;
