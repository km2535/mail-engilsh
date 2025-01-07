import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // 기본 API URL
  timeout: 5000, // 요청 제한 시간
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
