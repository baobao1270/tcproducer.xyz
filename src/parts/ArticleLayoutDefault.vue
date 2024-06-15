<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue'
import Content from '@/parts/Content.vue'
import ArticleLoading from '@/parts/ArticleLoading.vue'

const route = useRoute()
const meta = route.meta as Record<string, any>

useHead({
  title: `${meta.title} | ${$site.title}`,
})
</script>

<template>
  <Content :title="meta.title" :show-back-top="true" :nav="[meta.title]">
    <ArticleLoading />
  </Content>
</template>
