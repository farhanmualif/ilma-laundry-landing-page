<template>
  <!-- Burger Button (Mobile Only) -->
  <button
    @click="$emit('toggle')"
    class="md:hidden text-gray-700 focus:outline-none absolute right-10">
    <svg
      class="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>
  <div
    v-if="isOpen"
    class="md:hidden absolute top-28 left-0 w-screen bg-white shadow-md z-50 transition-all duration-300 ease-in-out">
    <nav class="flex flex-col items-center space-y-4 py-6 text-gray-700">
      <a href="#home" class="hover:text-blue-400 font-medium text-lg">Home</a>
      <a href="#tentang" class="hover:text-blue-400 font-medium text-lg"
        >Tentang Kami</a
      >
      <a href="#layanan" class="hover:text-blue-400 font-medium text-lg" hero
        >Layanan Kami</a
      >
      <a href="#lokasi" class="hover:text-blue-400 font-medium text-lg"
        >Lokasi Kami</a
      >
    </nav>
  </div>
</template>

<script setup lang="ts">
const { isOpen } = defineProps<{
  isOpen: boolean;
}>();
defineEmits(["toggle"]);
</script>

<!-- <style scoped>  
/* Tambahkan transisi Vue custom */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style> -->
