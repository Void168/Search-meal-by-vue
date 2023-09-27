<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow-lg rounded-xl"
    >
      <CardMeal
        :params="{ id: meal.idMeal }"
        :strMeal="meal.strMeal"
        :strYoutube="meal.strYoutube"
        :strMealThumb="meal.strMealThumb"
        :strSource="meal.strSource"
      ></CardMeal>
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600">
      There are no meals
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import store from "../store";

import CardMeal from "../components/CardMeal.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredients);

onMounted(() => {
  store.dispatch("searchMealsByIngredients", route.params.ingredient);
});
</script>
