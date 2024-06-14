<script setup async lang="ts">
import { renderArticle } from '@/articles';

const props = defineProps<{ path: string }>()

const contentHtml = await renderArticle(props.path)
</script>

<template>
  <section v-html="contentHtml" class="markdown-content" />
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
