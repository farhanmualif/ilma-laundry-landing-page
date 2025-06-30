<template>
  <div class="bg-white font-sans">
    <!-- Header -->
    <Header />
    <!-- Hero Section -->
    <HeroSection />
    <!-- Tentang Kami Section -->
    <TentangKamiSection />
    <!-- Layanan Section -->
    <LayananSection />
    <!-- Lokasi Kami Section -->
    <LokasiKamiSection />
    <!-- Footer -->
    <FooterSection />

    <!-- Floating WhatsApp -->
    <a
      href="https://wa.me/6281994652424"
      target="_blank"
      data-aos="fade-up"
      data-aos-once="true"
      class="fixed bottom-6 right-6 opacity-0 aos-init aos-animate animate-bounceIn">
      <img :src="whatsapp" alt="WhatsApp" class="h-14" />
    </a>
  </div>
</template>

<script setup lang="ts">
import whatsapp from "@/assets/images/whatsapp.png";
import Header from "./Header.vue";
import HeroSection from "./HeroSection.vue";
import LayananSection from "./LayananSection.vue";
import TentangKamiSection from "./TentangKamiSection.vue";
import LokasiKamiSection from "./LokasiKamiSection.vue";
import FooterSection from "./footerSection.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
/* Additional custom styles if needed */
</style>
