import factory from '@/api/factory'
import axiosInstance from '@/api/axios'
import type { SubscribeRequest } from '@/api/type/Subscribe.ts'

const subscribeApi = factory(axiosInstance)

export default {
  async subscribeContents<T>(request: SubscribeRequest): Promise<T> {
    return subscribeApi.post<T>(`/v1/subscribe`, request).then((response) => response.data)
  },
}
