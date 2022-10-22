import Input from '@/components/UI/Input';
import {
  StyledMealItemForm,
  StyledMealItemFormButton,
} from './MealItemFormStyle';

interface MealItemFormProps {
  id: string;
}

function MealItemForm({ id }: MealItemFormProps) {
  return (
    <StyledMealItemForm>
      <Input
        id={id}
        label="Amount"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <StyledMealItemFormButton>+ Add</StyledMealItemFormButton>
    </StyledMealItemForm>
  );
}

export default MealItemForm;
