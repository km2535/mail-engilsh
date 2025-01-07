import type { TECH } from '@/components/enum/TECH.ts'

export interface SubscribeRequest {
  email: string
  tech: string
}
export interface SubscribeResponse {
  result: string
  data: null | SubscribeSuccessResponse
  errorMessageForLog: string
  errorMessageForClient: string
}

interface SubscribeSuccessResponse {
  subscribeToken: string
  Email: string
  tech: TECH
}
