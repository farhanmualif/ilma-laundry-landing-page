<template>
  <section id="lokasi" class="px-4 py-16 bg-white lg:max-w-7xl mx-auto">
    <div class="mx-auto">
      <!-- Judul -->
      <div
        class="text-center mb-10"
        data-aos="zoom-out-down"
        data-aos-duration="1500">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Lokasi Kami
        </h2>
        <p class="text-lg text-gray-600 mx-auto">
          Temukan lokasi usaha kami di peta berikut, atau kunjungi langsung
          alamat lengkap kami di bawah ini.
        </p>
      </div>

      <!-- Peta -->
      <div
        class="rounded-3xl overflow-hidden shadow-lg mb-8"
        data-aos="zoom-out-up"
        data-aos-duration="1500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15834.474033270053!2d109.501179!3d-6.961405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1719700000000!5m2!1sid!2sid"
          width="100%"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="h-[450px] border-none">
        </iframe>
      </div>

      <!-- Alamat -->
      <div class="text-center">
        <h3 class="text-2xl font-semibold text-gray-800 mb-2">
          Alamat Lengkap
        </h3>
        <p class="text-lg text-gray-600">
          Desa Muncang RT 34/RW 04, Kecamatan Bodeh, Kabupaten Pemalang,<br />
          Provinsi Jawa Tengah
        </p>
      </div>
    </div>
  </section>
</template>
