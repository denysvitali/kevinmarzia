import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css';

import './assets/main.css'
import "@fontsource/inter"
import "@fontsource/marck-script"

const app = createApp(App)

app.use(router)
app.mount('#app')