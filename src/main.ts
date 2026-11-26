import { createApp } from 'vue'
import App from './App.vue'
import { initPersistence } from './persistence'
import './style.css'

initPersistence()
createApp(App).mount('#app')
