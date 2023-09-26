<template>
  <a
    :href="href"
    target="_blank"
    class="px-4 py-2 border-2 ring-2 ring-offset-2 ring-white border-white bg-indigo-500 text-white rounded-lg font-semibold hover:border-indigo-400 hover:bg-white hover:ring-indigo-400 hover:text-indigo-500 transition-colors duration-250"
    ><slot></slot
  ></a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
