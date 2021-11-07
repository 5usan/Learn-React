import { useEffect, useReducer } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const initialState = {
  meals: [],
  isLoading: true,
  httpError: null,
};
const stateReducer = (state, action) => {
  if (action.type === "MEALS-LOADED") {
    return {
      meals: action.value,
      isLoading: false,
      httpError: null,
    };
  }

  if (action.type === "ERROR") {
    console.log(action.value);
    return {
      meals: null,
      isLoading: false,
      httpError: action.value,
    };
  }
  return initialState;
};

const AvailableMeals = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const fetchMeals = async () => {
    try {
      const response = await fetch(
        "https://food-ordering-system-cf216-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          key: key,
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      dispatch({
        type: "MEALS-LOADED",
        value: loadedMeals,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        value: error.message,
      });
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  if (state.isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (state.httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{state.httpError}</p>
      </section>
    );
  }

  const mealsList = state.meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
