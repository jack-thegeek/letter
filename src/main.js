import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import 'normalize.css/normalize.css';
import '@varlet/touch-emulator'
import '@varlet/ui/es/snackbar/style/index.js'
import "./assets/scss/main.scss";
import '@material-design-icons/font/filled.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

//app.config.globalProperties.$axios = axios
