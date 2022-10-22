import { StyledMealItemDescription, StyledMealItemH3, StyledMealItemLI, StyledMealItemPrice, } from '@/components/Meals/MealItem/MealItemStyle'
import MealItemForm from '@/components/Meals/MealItem/MealItemForm';

interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

function MealItem({id, name, description, price }: Meal) {
  const mealPrice = `${price.toFixed(2)}`;

  return (
    <StyledMealItemLI>
      <div>
        <StyledMealItemH3>{name}</StyledMealItemH3>
        <StyledMealItemDescription>{description}</StyledMealItemDescription>
        <StyledMealItemPrice>{mealPrice}</StyledMealItemPrice>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </StyledMealItemLI>
  );
}

export default MealItem;
