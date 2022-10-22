import { Fragment } from "react";
import MealsSummary from "@/components/Meals/MealsSummary";
import AvailableMeals from "@/components/Meals/AvailableMeals";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  )
}

export default Meals;