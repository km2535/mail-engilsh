// src/shims-vue.d.ts
import { RouteLocationNormalized } from 'vue-router'

// Extend the Vue component instance with `$route` and `$router`
declare module 'vue' {
  interface ComponentCustomProperties {
    $route: RouteLocationNormalized
  }
}
