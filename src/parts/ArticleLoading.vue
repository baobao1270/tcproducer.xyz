<script setup lang="ts">
import { useRoute } from 'vue-router';
import FontAwesomeIcon from '@/icon';
import ArticleMarkdown from '@/parts/ArticleMarkdown.vue'

const route = useRoute()
</script>

<template>
  <Suspense>
    <ArticleMarkdown :path="route.path" />
    <template #fallback>
      <div class="fallback-loading">
        <FontAwesomeIcon :icon="['fas', 'spinner']" spin />
      </div>
    </template>
  </Suspense>
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

