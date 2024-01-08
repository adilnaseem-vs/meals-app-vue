import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient
    .get(`/search.php?s=${keyword}`)
    .then(({ data }) => {
      commit("setSearchedMeals", data.meals);
    })
    .catch((err) => {});
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient
    .get(`/search.php?f=${letter}`)
    .then(({ data }) => {
      commit("setMealsByLetter", data.meals);
    })
    .catch((err) => {});
}

export function searchMealsByIngredient({ commit }, ingredient) {
  axiosClient
    .get(`/filter.php?i=${ingredient}`)
    .then(({ data }) => {
      commit("setMealsByIngredient", data.meals);
    })
    .catch((err) => {});
}

export function randomMeal({ commit }) {
  const meals = [];
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get("/random.php")
      .then(({ data }) => {
        meals[i] = data.meals;
        if (meals.length === 10) {
          console.log(meals);
          commit("setRandomMeals", meals);
        }
      })
      .catch((err) => {});
  }
}
