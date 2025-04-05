import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { formatNumberWithCommas } from './utils/formatters.ts'

const app = createApp(App)
app.config.globalProperties.$formatNumberWithCommas = formatNumberWithCommas
app.mount('#app')
