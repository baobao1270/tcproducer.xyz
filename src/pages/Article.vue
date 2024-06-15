<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue'
import FontAwesomeIcon from '@/icon'
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
      <template #fallback>
        <div class="fallback-loading">
          <FontAwesomeIcon :icon="['fas', 'spinner']" spin />
        </div>
      </template>
    </Suspense>
  </Content>
</template>

<style scoped>
.fallback-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
}

.fallback-loading svg {
  font-size: 3rem;
}
</style>

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
