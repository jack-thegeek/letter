import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import 'normalize.css/normalize.css';
import '@varlet/touch-emulator'
import '@varlet/ui/es/snackbar/style/index.js'
import "./assets/scss/main.scss";

createApp(App)
    .use(router)
    .mount('#app')
