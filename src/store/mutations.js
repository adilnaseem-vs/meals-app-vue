export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals;
  state.isLoading = false;
}

export function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals;
  state.isLoading = false;
}

export function setMealsByIngredient(state, meals) {
  state.mealsByIngredient = meals;
  state.isLoading = false;
}

export function setRandomMeals(state, meals) {
  state.randomMeals = meals;
  state.isLoading = false;
}

export function setIsLoading(state, isLoading) {
  state.isLoading = isLoading;
}
