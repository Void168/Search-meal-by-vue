import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient
    .get(`${import.meta.env.VITE_BASE_URL}/search.php?s=${keyword}`)
    .then(({ data }) => {
      commit("setSearchedMeals", data.meals);
    });
}
