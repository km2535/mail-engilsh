import factory from '@/api/factory'
import axiosInstance from '@/api/axios'
import type { SubscribeRequest } from '@/api/type/Subscribe.ts'

const subscribeApi = factory(axiosInstance)

export default {
  // 콘텐츠 가져오기 메서드
  async subscribeContents<T>(request: SubscribeRequest): Promise<T> {
    return subscribeApi.post<T>(`/v1/subscribe`, request).then((response) => response.data)
  },
}
