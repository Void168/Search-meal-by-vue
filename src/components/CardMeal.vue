<template>
  <div>
    <router-link :to="{ name: 'mealDetails', params }">
      <img
        :src="strMealThumb"
        :alt="strMeal"
        class="rounded-t-xl w-full h-64 object-cover"
      />
    </router-link>
    <div class="p-3">
      <p class="font-semibold text-2xl">{{ strMeal }}</p>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        quis magnam voluptate quo.
      </p>

      <div class="mb-4 flex items-center justify-between">
        <YoutubeButton :href="strYoutube">Youtube</YoutubeButton>
        <ViewButton :href="strYoutube">View</ViewButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";
import ViewButton from "./ViewButton.vue";

const props = defineProps({
  params: {},
  strMeal: String,
  strYoutube: String,
  strMealThumb: String,
});
</script>
