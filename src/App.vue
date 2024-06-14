<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue'
import '@/main.css'
import Footer from '@/parts/Footer.vue'

const route = useRoute()
useHead({
  meta: [
    { name: 'description', content: $site.description }
  ],
  link: [
    { rel: 'canonical', href: $site.canonical.replace(/\/$/, '') + route.fullPath }
  ]
})
</script>

<template>
  <RouterView :key="$route.fullPath" />
  <Footer />
</template>
