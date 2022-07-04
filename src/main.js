import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './routes.js'
import '@varlet/touch-emulator'
import '@varlet/ui/es/snackbar/style/index.js'
import 'normalize.css/normalize.css';
import "./assets/scss/main.scss";
import "./assets/scss/color.scss";
import '@material-design-icons/font/filled.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.mount('#app')

//app.config.globalProperties.$axios = axios
