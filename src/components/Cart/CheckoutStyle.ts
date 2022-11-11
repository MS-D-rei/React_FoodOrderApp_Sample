import styled from 'styled-components';

export const CheckoutFormDiv = styled.div`
  margin: 1rem 0;
  height: 19rem;
  overflow: auto;
`;

export const CheckoutControlDiv = styled.div`
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  & input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
  }
`;

export const CheckoutActionsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const CheckoutCancelButton = styled.button`
  font: inherit;
  color: #5a1a01;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 2rem;

  &:hover,
  &:active {
    background-color: #ffe6dc;
  }
`;

export const CheckoutSubmitButton = styled.button`
  font: inherit;
  color: #5a1a01;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 2rem;
  border: 1px solid #5a1a01;
  background-color: #5a1a01;
  color: white;

  &:hover,
  &:active {
    background-color: #7a2706;
  }
`;
