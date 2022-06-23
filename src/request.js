import Axios, { AxiosInstance } from 'axios'

// const baseURL = 'https://vercel-mongodb-chi.vercel.app/api'
const baseURL = 'https://v1.hitokoto.cn'

const request = Axios.create({
  baseURL,
  timeout: 10000 // 请求超时
})

// 前置拦截器（发起请求之前的拦截）
request.interceptors.request.use(
  (config) => {

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
request.interceptors.response.use(
  (response) => {

    return response
  },
  (error) => {
    if (error.response && error.response.data) {

      console.error(`[Axios Error]`, error.response)
    } else {

    }
    return Promise.reject(error)
  }
)

export default request