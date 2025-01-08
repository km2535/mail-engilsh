export interface CommonContents {
  result: string
  data: null | ContentsCountResponse
  errorMessageForLog: string
  errorMessageForClient: string
}

interface ContentsCountResponse {
  backendBoardCount: number
  frontendBoardCount: number
  fullstackBoardCount: number
  infraBoardCount: number
}
