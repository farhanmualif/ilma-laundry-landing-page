<template>
  <footer class="bg-blue-600 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Brand -->
      <div>
        <h3 class="text-2xl font-bold mb-4">Ilma Laundry</h3>
        <p class="text-white">
          Layanan laundry terpercaya dengan kualitas terbaik untuk kebutuhan
          rumah tangga dan bisnis Anda.
        </p>
      </div>

      <!-- Navigasi -->
      <div>
        <h4 class="text-xl font-semibold mb-4">Navigasi</h4>
        <ul class="space-y-2 text-white">
          <li><a href="#beranda" class="hover:underline">Beranda</a></li>
          <li><a href="#layanan" class="hover:underline">Layanan</a></li>
          <li><a href="#lokasi" class="hover:underline">Lokasi Kami</a></li>
          <li><a href="#kontak" class="hover:underline">Kontak</a></li>
        </ul>
      </div>

      <!-- Kontak -->
      <div>
        <h4 class="text-xl font-semibold mb-4">Kontak Kami</h4>
        <p class="text-white">
          Desa Muncang RT 34/RW 04<br />Bodeh, Pemalang, Jawa Tengah
        </p>
        <p class="text-white mt-2">+62 819-9465-2424</p>
      </div>
    </div>

    <!-- Copyright -->
    <div
      class="border-t border-white mt-12 pt-6 text-center text-white text-sm">
      &copy; {{ new Date().getFullYear() }} Ilma Laundry. All rights reserved.
    </div>
  </footer>
</template>
