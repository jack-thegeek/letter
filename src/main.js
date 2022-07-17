import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './routes.js'
import '@varlet/touch-emulator'
import '@varlet/ui/es/snackbar/style/index.js'
import 'normalize.css/normalize.css';
import './assets/scss/main.scss';
import './assets/scss/color.scss';
import '@material-design-icons/font/filled.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')

//app.config.globalProperties.$axios = axios
