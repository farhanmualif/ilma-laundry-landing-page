<template>
  <section class="py-16 px-4 bg-gray-50 lg:w-7xl mx-auto">
    <div class="mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Jenis Layanan
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Pilih layanan yang sesuai dengan kebutuhan Anda. Kami menyediakan
          berbagai jenis layanan laundry dengan kualitas terbaik.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Loop through services -->
        <div
          v-for="(service, index) in services"
          :key="service.id"
          :data-aos="index < 3 ? 'fade-right' : 'fade-left'"
          data-aos-duration="1000"
          data-aos-once="true"
          class="relative rounded-3xl group">
          <!-- Hover Area -->
          <div
            class="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 shadow-md bg-white rounded-3xl">
            <!-- Card Content -->
            <div
              class="relative h-80 bg-cover bg-center bg-no-repeat rounded-3xl"
              :style="`background-image: url('${service.image}')`">
              <!-- Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl"></div>

              <!-- Content -->
              <div class="absolute bottom-6 left-6 right-6 text-white">
                <h3
                  class="text-2xl md:text-3xl font-bold mb-3 transition-colors duration-300">
                  {{ service.title }}
                </h3>
                <p
                  class="text-sm md:text-base text-gray-200 leading-relaxed transition-opacity duration-300 group-hover:opacity-90">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
    </div>
  </section>
</template>

<script setup lang="ts">
// Define interface for service type
interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Define reactive data
const services: Service[] = [
  {
    id: 1,
    title: "Kiloan",
    description:
      "Cocok untuk mencuci pakaian sehari-hari dalam jumlah besar. Proses cepat, bersih, dan rapi dengan harga terjangkau.",
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Satuan",
    description:
      "Pilihan tepat untuk mencuci item pakaian khusus seperti jas, gaun, atau pakaian berbahan halus yang membutuhkan perhatian ekstra.",
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Hanya Setrika",
    description:
      "Layanan khusus setrika untuk pakaian yang sudah bersih. Menghilangkan kerutan dan memberikan hasil yang rapi dan profesional dengan peralatan setrika berkualitas.",
    image:
      "https://media.istockphoto.com/id/641713422/photo/ironing-clothes-on-ironing-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=1tab-9KgllwKjJ8Fd2b0MoZaL_VErqJndLMWv9T-PAQ=",
  },
  {
    id: 4,
    title: "Jaket",
    description:
      "Layanan pencucian jaket berbahan tebal seperti jeans, parasut, atau bulu dengan teknik pencucian khusus agar tetap awet dan bersih maksimal.",
    image:
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Gorden",
    description:
      "Layanan khusus cuci gorden dengan teknik pembersihan lembut dan pengeringan aman agar tidak merusak kain.",
    image:
      "https://images.unsplash.com/photo-1616434602533-32fcefcc3621?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Sprei",
    description:
      "Layanan pencucian sprei, bed cover, dan linen dengan deterjen lembut dan pengeringan steril.",
    image:
      "https://images.unsplash.com/photo-1615742708220-e35f32936bd1?w=600&h=400&fit=crop",
  },
];
</script>
