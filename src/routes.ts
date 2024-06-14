import { Component } from 'vue'
import { articleRoutes } from '@/articles'
import Home from '@/pages/Home.vue'
import Artworks from '@/pages/Artworks.vue'
import NotFound from '@/pages/NotFound.vue'
import OpenSourceLicense from '@/pages/OpenSourceLicense.vue'

export interface Route {
  path: string
  component: Component
  meta: { [key: string]: string }
}

export const routes: Route[] = [
  ...articleRoutes(),
  { path: '/',                    component: Home,              meta: {} },
  { path: '/artworks',            component: Artworks,          meta: {} },
  { path: '/open-source-license', component: OpenSourceLicense, meta: {} },
  { path: '/404',                 component: NotFound,          meta: {} },
  { path: '/:_(.*)*',             component: NotFound,          meta: {} },
]
