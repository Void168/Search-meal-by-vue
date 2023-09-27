<template>
  <div class="p-8">
    <p class="text-5xl font-bold">Ingredients</p>
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of ingredients"
      :key="ingredient.id"
      class="block bg-white rounded p-3 my-6 shadow-md"
    >
      <p class="text-2xl font-bold">{{ ingredient.strIngredient }}</p>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);

onMounted(async () => {
  await axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
