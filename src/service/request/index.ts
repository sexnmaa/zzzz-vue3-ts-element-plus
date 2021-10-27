/* eslint-disable */
import axios from 'axios'
import { AxiosRequestConfig, AxiosInstance } from 'axios'
import { ElLoading, ILoadingInstance } from 'element-plus'

class sRequest {
  instance: AxiosInstance
  showLoading: ILoadingInstance | undefined
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use((config : any) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      if (config.url === '/login') {
        this.showLoading = ElLoading.service({
          lock: true,
          text: '正在登录，请稍后....',
          background: 'rgba(0, 0, 0, 0.5)'
        })
      }
      return config
    })
    this.instance.interceptors.response.use((res: any) => {
      if (res.data.code === 0 && res.status === 200) {
        setTimeout(() => {
          this.showLoading?.close()
        }, 600)
        return res.data
      } else {
        localStorage.removeItem('token')
      }
    })
  }
  request(config: any) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
          this.showLoading?.close()
          return error
        })
    })
  }
  get(config: any) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config: any) {
    return this.request({ ...config, method: 'POST' })
  }
}

export default sRequest
