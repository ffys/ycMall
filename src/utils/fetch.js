import axios from 'axios'
// import store from '@store'

// 创建axios实例
const serverce = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000       // 请求超时时间
})

// request 拦截器
serverce.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// response 拦截器
serverce.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default serverce
