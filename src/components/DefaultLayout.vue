<template>
  <div>
    <nav-bar></nav-bar>
    <main><router-view /></main>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    "nav-bar": Navbar,
  },
};
</script>
