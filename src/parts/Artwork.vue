<script setup lang="ts">
import { Artwork } from '@common/types'
import ArtworkInfo from './ArtworkInfo.vue'
import ArtworkLinkList from './ArtworkLinkList.vue'

defineProps<{ artwork: Artwork }>()
</script>

<template>
  <li class="artwork">
    <ArtworkInfo :artwork="artwork" />
    <ArtworkLinkList :artwork="artwork" />
  </li>
</template>

<style scoped>
.artwork {
  padding: 1rem;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 820px) {
  .artwork {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
