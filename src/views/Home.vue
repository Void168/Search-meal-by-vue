<template>
  <div class="flex flex-col p-8 justify-center items-center"></div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import instance from "../axiosClient.js";

const meals = computed(() => store.state.meals);

const ingredients = ref([]);

onMounted(async () => {
  const response = await instance.get(
    `${import.meta.env.VITE_BASE_URL}/list.php?i=list`
  );
  ingredients.value = response.data;
});
</script>
