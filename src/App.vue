<script setup lang="ts">
import Home from "./components/Home.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";

onMounted(() => {
  AOS.init({
    once: true, // agar animasi hanya terjadi sekali
  });
});
</script>

<template>
  <Home msg="Vite + Vue" />
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
</style>
