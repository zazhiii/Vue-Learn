import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router/index.js'
// import persist from 'pinia-plugin-persistedstate'
import pinia from '@/stores/index.js'

import '@/assets/main.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
