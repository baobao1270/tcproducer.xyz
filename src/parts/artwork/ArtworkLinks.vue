<script setup lang="ts">
import { Artwork } from '@common/types'
import { externalUrl, attachmentUrl } from '../../artworks'
import ArtworkLink from './ArtworkLink.vue'

defineProps<{ artwork: Artwork }>()
</script>

<template>
  <div class="artwork-links">
    <ArtworkLink :url="externalUrl(artwork, 'bilibili')"  :icon="['fab', 'bilibili']"      title="哔哩哔哩链接" />
    <ArtworkLink :url="externalUrl(artwork, 'youtube')"   :icon="['fab', 'youtube']"       title="YouTube 链接" />
    <ArtworkLink :url="attachmentUrl(artwork, 'project')" :icon="['fas', 'file-contract']" title="下载工程" />
    <ArtworkLink :url="attachmentUrl(artwork, 'video')"   :icon="['fas', 'file-video']"    title="下载 PV" />
    <ArtworkLink :url="attachmentUrl(artwork, 'audio')"   :icon="['fas', 'file-audio']"    title="下载音频" />
  </div>
</template>

<style scoped>
.artwork-links {
  display: flex;
  gap: 1.5rem;
}

.artwork-links * {
  display: block;
  width: 2rem;
}

@media screen and (max-width: 820px) {
  .artwork-links {
    width: 100%;
    justify-content: space-between;
    margin-top: .8rem;
  }
}
</style>
