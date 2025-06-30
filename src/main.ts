import { createApp } from 'vue';
import App from './App.vue';

import './style.css';
import './assets/styles/main.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

// Inisialisasi AOS setelah mount
app.mount('#app');

AOS.init({
  once: true, // animasi hanya terjadi sekali
});
