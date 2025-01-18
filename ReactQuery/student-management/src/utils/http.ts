import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:4000/',
      timeout: 10000,
      headers: {
        /**
         * Để gửi lên trên server, để server biết là chúng ta mong muốn
         * gửi và nhận có kiểu dữ liệu là json server
         */
        'Content-Type': 'application/json'
      }
    })
  }
}

// Mình dùng http này để mình gọi API

const http = new Http().instance

export default http
