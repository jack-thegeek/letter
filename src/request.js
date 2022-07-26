import Axios from 'axios'
import { Snackbar } from '@varlet/ui'
import { useRouter } from 'vue-router'
import { useUserStore } from './store/user'
import { storeToRefs } from 'pinia'

const router = useRouter()
const userStore = useUserStore()
const baseURL = 'https://vercel-mongodb-chi.vercel.app/api'
// const baseURL = 'http://127.0.0.1:3003/api'

const request = Axios.create({
    baseURL,
    timeout: 10000 // 请求超时
})

// 前置拦截器（发起请求之前的拦截）
request.interceptors.request.use(
  (config) => {
      const { jwtToken } = storeToRefs(userStore)
      if (jwtToken.value && jwtToken.value !== '') {
          config.headers.Authorization = jwtToken.value
      }
      return config
  },
  (error) => {
      console.log(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
request.interceptors.response.use(
  (response) => {
      return response
  },
  (error) => {
      console.log(error)
      if (error.response.data.msg) {
          error.message = error.response.msg
          Snackbar(error.message)
      }

      if (error.response.status === 400) {
          Snackbar.error('密码错误')
      }

      if (error.response.status === 401) {
          router.push('/login')
      }

      if (error.response.status === 403) {
          router.push('/login')
      }

      return Promise.reject(error)
  }
)

export default request
