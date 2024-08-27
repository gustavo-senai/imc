import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
