import type { AxiosInstance, AxiosResponse } from 'axios'

type ApiFactory = {
  get<T>(url: string): Promise<AxiosResponse<T>>
  post<T>(url: string, data: unknown): Promise<AxiosResponse<T>>
  put<T>(url: string, data: unknown): Promise<AxiosResponse<T>>
  delete<T>(url: string): Promise<AxiosResponse<T>>
}

export default (axiosInstance: AxiosInstance): ApiFactory => ({
  get<T>(url: string) {
    return axiosInstance.get<T>(url)
  },
  post<T>(url: string, data: unknown) {
    return axiosInstance.post<T>(url, data)
  },
  put<T>(url: string, data: unknown) {
    return axiosInstance.put<T>(url, data)
  },
  delete<T>(url: string) {
    return axiosInstance.delete<T>(url)
  },
})
