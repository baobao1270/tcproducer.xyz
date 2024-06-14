import { ViteSSG } from 'vite-ssg'
import { routes } from '@/routes'
import App from '@/App.vue'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior: async (to, _from, savedPosition) => {
      if (to.hash) return { el: to.hash }
      if (savedPosition) return savedPosition
      return { top: 0 }
    }
  },
)
