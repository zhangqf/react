import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios";
import { getToken } from "./token";
import qs from 'qs'

const baseurl = import.meta.env.VITE_BASE_URL

console.log(baseurl)

const request:AxiosInstance = axios.create({
  baseURL: baseurl,
  timeout: 3000
})

const methodsType = {
  POST: (config:InternalAxiosRequestConfig) =>{
    const data = config.data || false
    if(config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(data)
    }
  },
  PUT: () =>{},
  GET: (config:InternalAxiosRequestConfig) =>{
    const params = config.params || {}
    let url = config.url + '?'
    for(const propName of Object.keys(params)) {
      const value = params[propName]
      if(value !== void 0 && value !== null && typeof value !== 'undefined' ) {
        if(typeof value === 'object') {
          for(const val of Object.keys(value)) {
            const params = propName + '[' + val+ ']'
            const subPart = encodeURIComponent(params) + '='
            url+= subPart + encodeURIComponent(value[val]) + '&'
          }
        } else {
          url +=`${propName}=${encodeURIComponent(value)}&`
        }
      }
    }
    /* 去掉最后一个字符 &  */
    url = url.slice(0, -1)
    config.params = {}
    config.url = url
  },
  DELETE: () =>{}
}

type Methods = keyof typeof methodsType; 

/* 请求拦截 */
request.interceptors.request.use((config:InternalAxiosRequestConfig) => {
  console.log(config)
  const token = getToken()

  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  const { method } = config

  const type: Methods | undefined = method?.toUpperCase() as Methods | undefined;

  if (type && type in methodsType) {
    methodsType[type](config); // 调用相应的方法
  }



  return config
}, (error:AxiosError) => {
  return Promise.reject(error)
})

/* 响应拦截 */
request.interceptors.response.use(async (response:AxiosResponse<any>) => {

  return response.data
}, (error:AxiosError) => {
  return Promise.reject(error)
})


export { request }