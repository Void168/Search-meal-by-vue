<template>
  <a
    :href="href"
    target="_blank"
    class="cursor-pointer px-4 py-2 border-2 ring-2 ring-offset-2 ring-white border-white bg-rose-500 text-white rounded-lg font-semibold hover:border-rose-400 hover:bg-white hover:ring-rose-400 hover:text-rose-500 transition-colors duration-250"
    ><slot></slot
  ></a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
