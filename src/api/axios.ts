import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URI,
  timeout: 5000, // 요청 제한 시간
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
