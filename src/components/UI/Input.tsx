import {
  StyledInputDiv,
  StyledInputInput,
  StyledInputLabel,
} from '@/components/UI/InputStyle';
import React from 'react';

interface InputProps {
  ref: React.RefObject<HTMLInputElement>;
  id: string;
  label: string;
  type: string;
  min?: string;
  max?: string;
  step?: string;
  defaultValue?: string;
}

type InputRef = HTMLInputElement;

// function Input<InputRef, InputProps>(
//   { id, label, type, defaultValue },
//   { ref }
// ) {
//   return (
//     <StyledInputDiv>
//       <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>
//       <StyledInputInput id={id} type={type} defaultValue={defaultValue} />
//     </StyledInputDiv>
//   );
// }

const Input = React.forwardRef<InputRef, InputProps>(
  ({ id, label, type, defaultValue }, ref) => {
    return (
      <StyledInputDiv>
        <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>
        <StyledInputInput id={id} type={type} defaultValue={defaultValue} ref={ref} />
      </StyledInputDiv>
    );
  }
);

export default Input;
