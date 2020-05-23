import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  //creates an array of keys and then we're mapping it out
  const transformedIngredients = Object.keys(props.ingredients).map(
    ingredientKey => {
      //first return will bring us an array of arrays with elements number equal to ingredients number
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    }
  );
  console.log((transformedIngredients).map(
    ingredientKey => {
      //first return will bring us an array of elements equal to 
      return [...Array(props.ingredients[ingredientKey])]}));
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
