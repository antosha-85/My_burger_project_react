import * as actionTypes from "./actionTypes";

export const addIngredients = (name) => {
  return {
    ingredientName: name,
    type: actionTypes.ADD_INGREDIENT,
  };
};
export const removeIngredients = (name) => {
  return {
    ingredientName: name,
    type: actionTypes.REMOVE_INGREDIENT,
  };
};
