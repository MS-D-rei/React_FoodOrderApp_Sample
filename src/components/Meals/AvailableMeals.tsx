import { StyledAvailableMealSection } from '@/components/Meals/AvailableMealsStyles';
import { StyledCard } from '@/components/UI/Card';
import MealItem from '@/components/Meals/MealItem/MealItem';
import { Meal } from '@/components/Meals/types';

const DUMMY_MEALS: Meal[] = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <StyledAvailableMealSection>
      <StyledCard>
        <ul>{mealsList}</ul>
      </StyledCard>
    </StyledAvailableMealSection>
  );
}

export default AvailableMeals;
