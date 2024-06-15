<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue'
import { NavigationItem } from '@common/types'
import Content from '@/parts/Content.vue'
import ArticleLoading from '@/parts/ArticleLoading.vue'
import ArticleCopyrightBadge from '@/parts/ArticleCopyrightBadge.vue'

const route = useRoute()
const meta = route.meta as Record<string, any>
// const articlePath = $site.canonical.replace(/\/$/, '') + route.fullPath
let nav: NavigationItem[] = [meta.title]
let title = meta.title
let bannerTitle = '小说'

if (meta.novel === 'short') {
  const displayName = '短篇小说'
  nav.unshift({ name: displayName, url: '/novels' })
  title = `${meta.title} | ${displayName}`
  bannerTitle = displayName
}

useHead({
  title: `${title} | ${$site.title}`,
})
</script>

<template>
  <Content :title="bannerTitle" :show-back-top="true" :nav="nav">
    <h1>{{ meta.title }}</h1>
    <ArticleLoading />
    <ArticleCopyrightBadge v-if="meta.copyright_year"
      :title="meta.title" :year="meta.copyright_year"
      path="/" />
  </Content>
</template>
