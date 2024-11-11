// @ts-nocheck
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from './router'
import 'normalize.css'
import '@/assets/styles/common.scss'
import '@/utils/request'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
