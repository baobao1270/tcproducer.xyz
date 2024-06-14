<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue'
import Content from '@/parts/Content.vue'
import AsyncArticle from '@/parts/AsyncArticle.vue'

const route = useRoute()
const meta = route.meta as Record<string, any>

useHead({
  title: `${meta.title} | ${$site.title}`
})
</script>

<template>
  <Content :title="meta.title" :show-back-top="true">
    <Suspense>
      <AsyncArticle :path="route.path" />
    </Suspense>
  </Content>
</template>

<style>
.markdown-content h2,
.markdown-content h3,
.markdown-content h4 {
  padding-top: 5rem;
  font-weight: 400;
}

.markdown-content {
  line-height: 1.8;
}
</style>
