export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals;
}

export function setMealsByLetter(state, meals) {
  console.log("setmealsbyletter => ", meals);
  state.mealsByLetter = meals;
}

export function setMealsByIngredient(state, meals) {
  state.mealsByIngredient = meals;
}

export function setRandomMeals(state, meals) {
  state.randomMeals = meals;
}
