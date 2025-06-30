import { AOS } from 'aos';
import 'aos/dist/aos.css';
import { createApp, onMounted } from 'vue'
import './style.css'
import './assets/styles/main.css'
import App from './App.vue'

createApp(App).mount('#app')
AOS.init()
onMounted(() => {
  AOS.init({
    once: true, // animasi hanya terjadi sekali
  });
});