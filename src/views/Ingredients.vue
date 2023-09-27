<template>
  <div class="p-8">
    <p class="text-5xl font-bold">Ingredients</p>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full mt-6"
      placeholder="Search for Ingredients"
      @change="searchMeals"
    />
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of computedIngredients"
      :key="ingredient.id"
      class="block bg-white rounded p-3 my-3 shadow-md"
    >
      <p class="text-2xl font-bold">{{ ingredient.strIngredient }}</p>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((ing) => {
    return (
      (ing.strDescription || "")
        .toLowerCase()
        .includes(keyword.value.toLowerCase()) ||
      ing.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    );
  });
});

onMounted(async () => {
  await axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
