import { StyledInputDiv, StyledInputInput, StyledInputLabel } from "@/components/UI/InputStyle";

interface InputProps {
  id: string;
  label: string;
  type: string;
  min?: string;
  max?: string;
  step?: string;
  defaultValue?: string;
}

function Input({id, label, type, defaultValue}: InputProps) {
  return (
    <StyledInputDiv>
      <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>
      <StyledInputInput id={id} type={type} defaultValue={defaultValue} />
    </StyledInputDiv>
  )
}

export default Input;