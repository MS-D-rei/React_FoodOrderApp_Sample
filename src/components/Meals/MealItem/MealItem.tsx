import { StyledMealItemDescription, StyledMealItemH3, StyledMealItemLI, StyledMealItemPrice, } from '@/components/Meals/MealItem/MealItemStyle'

interface Meal {
  name: string;
  description: string;
  price: number;
}

function MealItem({ name, description, price }: Meal) {
  const mealPrice = `${price.toFixed(2)}`;

  return (
    <StyledMealItemLI>
      <div>
        <StyledMealItemH3>{name}</StyledMealItemH3>
        <StyledMealItemDescription>{description}</StyledMealItemDescription>
        <StyledMealItemPrice>{mealPrice}</StyledMealItemPrice>
      </div>
      <div></div>
    </StyledMealItemLI>
  );
}

export default MealItem;
