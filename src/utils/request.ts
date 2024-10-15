import axios from "axios";

const baseurl = import.meta.env.VITE_BASE_URL

console.log(baseurl)

const request = axios.create({
  baseURL: baseurl,
  timeout: 3000
})

/* 请求拦截 */
request.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

/* 响应拦截 */
request.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})


export { request }