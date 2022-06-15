import axios, { AxiosInstance } from 'axios'

import { RequestConfig} from "./type"

class XHR {
  instance: AxiosInstance

  constructor(config: RequestConfig) {

    this.instance = axios.create(config)
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance.request<any, T>(config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET"})
  }
}

export default XHR