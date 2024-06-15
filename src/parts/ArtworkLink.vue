<script setup lang="ts">
import FontAwesomeIcon from '@/icon'

defineProps<{ url: string | null | undefined, title: string, icon: string[] }>()
</script>

<template>
  <div class="artwork-operations">
    <a target="_blank" :title="title" v-if="url" :href="url">
      <FontAwesomeIcon :icon="icon" />
    </a>
    <span v-else />
  </div>
</template>

<style scoped>
.artwork-links a {
  color: #838383;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all .3s ease-in;
}

.artwork-links a:hover {
  color: #303030;
  transition: all .3s ease-out;
}

@media (prefers-color-scheme: dark) {
  .artwork-links a:hover {
    color: #f3f3f3;
  }
}
</style>
