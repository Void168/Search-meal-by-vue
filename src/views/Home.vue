<template>
  <div class="flex flex-col p-8 justify-center items-center">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
    />

    <div class="flex gap-4 mt-4 justify-center">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letters.indexOf(letter)"
      >
        <span class="text-xl letter">{{ letter }}</span>
      </router-link>
    </div>

    <pre>{{ ingredients }}</pre>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import instance from "../axiosClient.js";

const meals = computed(() => store.state.meals);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const response = await instance.get(
    `${import.meta.env.VITE_BASE_URL}/list.php?i=list`
  );
  console.log(response.data);
  ingredients.value = response.data;
});
</script>

<style scoped>
.letter {
  text-shadow: 2px 2px 5px rgb(64 64 64);
}
</style>
