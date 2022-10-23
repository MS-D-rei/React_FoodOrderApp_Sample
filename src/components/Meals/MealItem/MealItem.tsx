import {
  StyledMealItemDescription,
  StyledMealItemH3,
  StyledMealItemLI,
  StyledMealItemPrice,
} from '@/components/Meals/MealItem/MealItemStyle';
import MealItemForm from '@/components/Meals/MealItem/MealItemForm';
import { useCartContext } from '@/store/cart-context';
import { Meal } from '@/components/Meals/types'

function MealItem({ id, name, description, price }: Meal) {
  const cartCtx = useCartContext();
  const mealPrice = `${price.toFixed(2)}`;

  const addItemToCartHandler = (enteredAmount: number) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: enteredAmount,
      price: price,
    });
  };

  return (
    <StyledMealItemLI>
      <div>
        <StyledMealItemH3>{name}</StyledMealItemH3>
        <StyledMealItemDescription>{description}</StyledMealItemDescription>
        <StyledMealItemPrice>{mealPrice}</StyledMealItemPrice>
      </div>
      <div>
        <MealItemForm id={id} onAddItemToCart={addItemToCartHandler} />
      </div>
    </StyledMealItemLI>
  );
}

export default MealItem;
