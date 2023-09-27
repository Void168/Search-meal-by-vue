<template>
  <div>
    <div class="flex flex-wrap gap-4 mt-4 justify-center">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letters.indexOf(letter)"
      >
        <span class="text-xl letter">{{ letter }}</span>
      </router-link>
    </div>
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
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import CardMeal from "../components/CardMeal.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style scoped>
.letter {
  text-shadow: 2px 2px 5px rgb(64 64 64);
}
</style>
