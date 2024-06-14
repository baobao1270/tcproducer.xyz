<script setup lang="ts">
import { useHead } from '@unhead/vue'
import AvatarSlogan from '@/parts/AvatarSlogan.vue'
import SocialNetworkList from '@/parts/SocialNetworkList.vue'

useHead({
  title: $site.title
})
</script>

<template>
  <main>
    <AvatarSlogan />
    <SocialNetworkList />
  </main>
</template>

<style scoped>
main {
  width: 100%;
}
</style>
