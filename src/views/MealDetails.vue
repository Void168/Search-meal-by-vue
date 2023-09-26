<template>
  <div class="max-w-[800px] mx-auto p-8">
    <p class="text-5xl font-bold mb-5">{{ meal.strMeal }}</p>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <span class="font-bold">Category:</span>
        {{ meal.strCategory }}
      </div>
      <div>
        <span class="font-bold">Area:</span>
        {{ meal.strArea }}
      </div>
      <div>
        <span class="font-bold">Tag:</span>
        {{ meal.strTags }}
      </div>
    </div>

    <div class="my-8">
      <p class="font-semibold text-xl">Description:</p>
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <p class="text-2xl font-semibold mb-3">Ingredients</p>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]" :key="ind">
              {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <p class="text-2xl font-semibold mb-3">Measures</p>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]" :key="ind">
              {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-4 flex justify-between items-center">
      <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
      <ViewButton :href="meal.strSource">View Original Source</ViewButton>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";
import ViewButton from "../components/ViewButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient
    .get(`${import.meta.env.VITE_BASE_URL}/lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {};
    });
});
</script>
