import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient
    .get(`${import.meta.env.VITE_BASE_URL}/search.php?s=${keyword}`)
    .then(({ data }) => {
      commit("setSearchedMeals", data.meals);
    });
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient
    .get(`${import.meta.env.VITE_BASE_URL}/search.php?f=${letter}`)
    .then(({ data }) => {
      commit("setMealsByLetter", data.meals);
    });
}

export function searchMealsByIngredients({ commit }, ing) {
  axiosClient
    .get(`${import.meta.env.VITE_BASE_URL}/filter.php?i=${ing}`)
    .then(({ data }) => {
      commit("setMealsByIngredients", data.meals);
    });
}
