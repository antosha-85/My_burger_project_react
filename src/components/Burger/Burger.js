import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { withRouter } from 'react-router-dom'

const Burger = (props) => {
  console.log('[Burger.js] component props', props)
  //creates an array of keys and then we're mapping it out
  let transformedIngredients = Object.keys(props.ingredients).map(
    ingredientKey => {
      //first return will bring us an array of arrays with elements number equal to ingredients number
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    }
  ).reduce((accumulator,currentValue)=>{
    return accumulator.concat(currentValue)
  }, []);
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(Burger);
