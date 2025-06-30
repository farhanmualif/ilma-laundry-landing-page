<template>
  <section id="layanan" class="px-4 py-16 bg-gray-50">
    <!-- Header Section -->
    <div class="mx-auto">
      <div
        class="text-center mb-16 mx-auto"
        data-aos="fade-down"
        data-aos-duration="1000">
        <h2 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Layanan Kami
        </h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Ilma Laundry menawarkan berbagai layanan laundry yang disesuaikan
          dengan kebutuhan Anda — mulai dari pakaian harian, boneka, hingga
          selimut. Kami mengutamakan kualitas, kebersihan, dan ketepatan waktu,
          lengkap dengan layanan antar-jemput langsung ke rumah Anda. Praktis,
          cepat, dan terpercaya!
        </p>
      </div>

      <!-- Main Content dengan Gambar -->
      <div
        class="h-screen lg:w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="2000">
        <div class="relative">
          <!-- Background Image Container -->
          <div class="relative rounded-3xl overflow-hidden shadow-2xl">
            <!-- Placeholder untuk gambar dokumentasi pengecekan -->
            <div
              class="relative h-screen bg-cover bg-center bg-no-repeat"
              :style="`background-image: url(${bannerImage})`">
              <div class="absolute inset-0"></div>
              <!-- Overlay dengan konten teks -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent">
                <div class="absolute bottom-8 left-8 text-white z-10">
                  <h3 class="text-3xl md:text-6xl font-bold mb-3">
                    Layanan Antar Jemput
                  </h3>
                  <p
                    class="text-lg md:text-2xl text-gray-200 max-w-4xl leading-relaxed">
                    Kami menyediakan layanan antar-jemput laundry secara gratis
                    khusus untuk wilayah
                    <span class="font-semibold text-white">Mucang Bodeh</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Grid -->
    <JenisLayanan />
    <!-- Call to Action -->
  </section>
</template>

<script setup lang="ts">
import JenisLayanan from "./JenisLayanan.vue";
import bannerImage from "@/assets/images/banner-2.png";
</script>

<style scoped>
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}
</style>
