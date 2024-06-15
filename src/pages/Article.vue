<script setup lang="ts">
import { useRoute } from 'vue-router';
import ArticleLayoutNovel from '@/parts/ArticleLayoutNovel.vue'
import ArticleLayoutDefault from '@/parts/ArticleLayoutDefault.vue'

const route = useRoute()
const meta = route.meta as Record<string, any>
</script>

<template>
  <ArticleLayoutNovel v-if="meta.novel" />
  <ArticleLayoutDefault v-else />
</template>
