/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_SERVER_URI: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
