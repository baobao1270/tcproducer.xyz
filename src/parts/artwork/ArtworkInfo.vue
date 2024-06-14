<script setup lang="ts">
import FontAwesomeIcon from '@/icon'
import { Artwork } from '@common/types'
import { engineColor, singerColor, attachmentSpecIcon } from '../../artworks'

defineProps<{ artwork: Artwork }>()
</script>

<template>
  <div class="artwork-info">
    <div class="artwork-info-meta">
      <code class="artwork-info-meta-code">{{ artwork.id }}</code>
      <span class="artwork-info-meta-original" v-if="artwork.original">Cover {{ artwork.original }}</span>
    </div>
    <div class="artwork-info-headline">
      <h2 class="artwork-info-headline-title">{{ artwork.title }}</h2>
      <div class="artwork-info-headline-badge">
        <span class="artwork-info-headline-badge-tag"
          :style="singerColor(artwork.singer)">{{ artwork.singer }}</span>
        <span class="artwork-info-headline-badge-tag" v-if="artwork.engine"
          :style="engineColor(artwork.engine)">{{ artwork.engine }}</span>
      </div>
    </div>
    <div class="artwork-info-detail">
      <div class="artwork-info-detail-attachment" v-for="attachment in artwork.attachments" :key="attachment.type">
        <FontAwesomeIcon :icon="attachmentSpecIcon(attachment)" />
        <span class="artwork-info-detail-attachment-spec">{{ attachment.spec }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.artwork-info-meta {
  font-size: 1rem;
  color: #838383;
}

.artwork-info-meta-original {
  font-size: .9rem;
  padding-left: .5rem;
}

.artwork-info-meta-original::before {
  content: "•";
  padding-right: .5rem;
  color: #838383;
}

.artwork-info-headline {
  display: flex;
  align-items: center;
}

.artwork-info-headline-title {
  display: inline-block;
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0;
}

.artwork-info-headline-badge-tag {
  font-size: .9rem;
  padding: .2em .5em;
  border-radius: .5em;
  margin-left: .5rem;
  display: inline-block;
}

.artwork-info-detail {
  font-size: .8rem;
  color: #838383;
  line-height: 1.8;
}

.artwork-info-detail-attachment-spec {
  padding-left: .5rem;
}

.artwork-info-detail-attachment {
  display: flex;
  align-items: flex-start;
}

.artwork-info-detail-attachment svg {
  margin-top: .3rem;
}

@media screen and (max-width: 820px) {
  .artwork-info {
    width: 100%;
  }

  .artwork-info-headline {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: .8rem;
  }

  .artwork-info-headline-title {
    font-size: 1.2rem;
    display: block;
  }

  .artwork-info-headline-badge {
    display: flex;
    gap: .5rem;
    margin-left: .5rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .artwork-info-headline-badge-tag {
    margin: 0;
    display: block;
    white-space: nowrap;
  }

  .artwork-info-meta {
    font-size: .9rem;
  }
}
</style>
