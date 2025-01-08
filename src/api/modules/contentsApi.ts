import factory from '@/api/factory'
import axiosInstance from '@/api/axios'

const subscribeApi = factory(axiosInstance)

export default {
  async contentsCount<T>(): Promise<T> {
    return subscribeApi.get<T>(`/v1/contents/count`).then((response) => response.data)
  },
}
