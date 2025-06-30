<template>
  <section class="py-16 px-4 bg-white lg:w-7xl mx-auto" id="tentang">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Left Column - Content -->
      <div
        class="space-y-6 mx-auto"
        data-aos="fade-right"
        data-aos-duration="2000">
        <!-- Section Header -->
        <div class="space-y-4">
          <h2
            class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Tentang Kami
          </h2>
          <div class="w-20 h-1 bg-blue-600 rounded-full"></div>
        </div>

        <!-- Main Description -->
        <div class="space-y-6 text-gray-700">
          <p class="text-lg md:text-xl leading-relaxed">
            Kami adalah layanan laundry terpercaya yang didirikan pada tahun
            2024 oleh Ibu Ulfa Khaeriyah dan Bapak Fathurahman. Nama "Ilma"
            diambil dari nama putri tercinta, Ilma Latifatunnisa, yang menjadi
            inspirasi dalam memberikan pelayanan terbaik untuk keluarga.
          </p>

          <p class="text-base md:text-lg leading-relaxed">
            Menggunakan teknologi modern dan deterjen berkualitas, kami
            memberikan hasil cucian yang bersih, wangi, dan terawat. Kami selalu
            siap memberikan pelayanan terbaik untuk kepuasan Anda.
          </p>
        </div>

        <!-- Features/Values -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div
            v-for="feature in features"
            :key="feature.id"
            class="flex items-start space-x-3">
            <div
              class="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
              <svg
                class="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">
                {{ feature.title }}
              </h3>
              <p class="text-sm text-gray-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Image -->
      <div
        class="relative lg:justify-self-end"
        data-aos="fade-left"
        data-aos-duration="2000">
        <!-- Main Image -->
        <div
          class="relative h-96 w-96 lg:h-[500px] lg:w-[450px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            :src="fotoUsaha"
            :alt="imageAlt"
            class="w-full h-96 lg:h-[500px] lg:w-[450px] object-cover" />
          <!-- Overlay untuk aesthetic -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        <!-- Decorative Elements -->
        <div
          class="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-70 -z-10"></div>
        <div
          class="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-50 rounded-full opacity-50 -z-10"></div>

        <!-- Stats Card (Optional) -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import fotoUsaha from "@/assets/images/foto-usaha.jpg";
// Define interfaces
interface Feature {
  id: number;
  title: string;
  description: string;
}

const imageAlt =
  "Laundry shop interior with washing machines and clean environment";

const features: Feature[] = [
  {
    id: 1,
    title: "Kualitas Terjamin",
    description:
      "Menggunakan deterjen berkualitas tinggi dan proses yang teliti",
  },
  {
    id: 2,
    title: "Pelayanan Cepat",
    description: "Proses pengerjaan yang efisien dengan hasil memuaskan",
  },
  {
    id: 3,
    title: "Harga Terjangkau",
    description: "Tarif kompetitif dengan layanan berkualitas premium",
  },
  {
    id: 4,
    title: "Pickup & Delivery",
    description: "Layanan antar jemput untuk kemudahan Anda",
  },
];
</script>
