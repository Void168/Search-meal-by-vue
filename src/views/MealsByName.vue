<template>
  <div class="p-8 pb-0">
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
        <CardMeal
          :params="{ id: meal.idMeal }"
          :strMeal="meal.strMeal"
          :strYoutube="meal.strYoutube"
          :strMealThumb="meal.strMealThumb"
          :strSource="meal.strSource"
        ></CardMeal>
      </div>
    </div>
    <div
      v-if="!meals.length"
      class="flex justify-center items-center text-gray-600"
    >
      <p class="text-3xl font-semibold">There are no meals</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import CardMeal from "../components/CardMeal.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("searchMeals", keyword.value);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
