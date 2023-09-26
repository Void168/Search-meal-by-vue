<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div
        v-for="meal of meals"
        :key="meal.idMeal"
        class="bg-white shadow-lg rounded-xl"
      >
        <router-link to="/">
          <img
            :src="meal.strMealThumb"
            :alt="strMeal"
            class="rounded-t-xl w-full h-64 object-cover"
          />
        </router-link>
        <div class="p-3">
          <p class="font-semibold text-2xl">{{ meal.strMeal }}</p>
          <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            quis magnam voluptate quo.
          </p>

          <div class="mb-4 flex justify-between">
            <a
              href="meal.strYoutube"
              target="_blank"
              class="px-4 py-2 border-2 ring-2 ring-offset-2 ring-white border-white bg-rose-500 text-white rounded-lg font-semibold hover:border-rose-400 hover:bg-white hover:ring-rose-400 hover:text-rose-500 transition-colors duration-250"
              >Youtube</a
            >
            <router-link
              to="/"
              class="px-4 py-2 border-2 ring-2 ring-offset-2 ring-white border-white bg-indigo-500 text-white rounded-lg font-semibold hover:border-indigo-400 hover:bg-white hover:ring-indigo-400 hover:text-indigo-500 transition-colors duration-250"
            >
              View
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>
