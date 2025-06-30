<template>
  <header
    data-aos="fade-down"
    data-aos-duration="1000"
    data-aos-delay="2000"
    :class="[
      'flex justify-between items-center p-4 mx-auto transition-all duration-300',
      isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-white ' : 'relative',
    ]">
    <div class="flex items-center space-x-2 w-10/12 mx-auto">
      <div class="">
        <img :src="logoIlma" alt="Ilma Laundry" class="h-20" />
      </div>

      <!-- Burger Button (Mobile Only) -->
      <BurgerButton
        :isOpen="isMobileMenuOpen"
        @toggle="isMobileMenuOpen = !isMobileMenuOpen" />

      <!-- desktop navbar -->
      <DesktopNavbar />

      <div class="text-center hidden md:block">
        <button
          class="bg-blue-500 hover:bg-blue text-white px-7 py-2 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Pesan Laundry
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logoIlma from "@/assets/images/logo-ilma.jpg";

import DesktopNavbar from "./DesktopNavbar.vue";
import { ref, onMounted, onUnmounted } from "vue";
import BurgerButton from "./BurgerButton.vue";

let isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
