<script setup lang="ts">
import { useHead } from '@unhead/vue'
import Content from '@/parts/Content.vue'
import Artwork from '@/parts/Artwork.vue'

const artworks = $artworks
const name = $site.name

useHead({
  title: `歌声合成工程 | ${$site.title}`
})
</script>

<template>
  <Content title="歌声合成工程" :show-back-top="false" :nav="['歌声合成工程']">
    <ul>
      <li class="readme">
        <p>此页面发布「{{ name }}」扒谱、调教的歌声合成作品，包括工程文件和媒体文件。</p>
        <p>详细信息请参见 <RouterLink to="/about#artwork-readme">关于本站配布歌声合成工程的说明</RouterLink> 页面。</p>
        <p>若您需要使用本站配布的工程，请确保您已阅读 <RouterLink to="/copyright#artworks">歌声合成工程文件使用规范</RouterLink>。
        </p>
      </li>
      <Artwork v-for="artwork in artworks" :artwork="artwork" :key="artwork.id" />
    </ul>
  </Content>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 5rem;
}

.readme {
  font-size: .9rem;
}
</style>
