<script setup lang="ts">
import { parseIcon } from '@/icon'
import SocialNetworkLink from '@/parts/SocialNetworkLink.vue'
const { social_networks, contact_email } = $site
</script>

<template>
  <section>
    <nav>
      <ul>
        <SocialNetworkLink v-for="platform in social_networks" :key="platform.name"
          :title="platform.name" :to="platform.url" :icon="parseIcon(platform.icon)" />
        <ClientOnly>
          <SocialNetworkLink :to="`mailto:${contact_email}`" :icon="['fas', 'envelope']"
            title="电子邮箱" />
        </ClientOnly>
        <SocialNetworkLink to="/novels"   :icon="['fas', 'newspaper']"
          title="小说" />
        <SocialNetworkLink to="/artworks" :icon="['fas', 'circle-right']"
          title="工程配布" />
      </ul>
    </nav>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  margin-bottom: 5rem;
}

section nav ul {
  list-style: none;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem 4rem;
  flex-flow: wrap;
  overflow: hidden;
}

@media screen and (max-width: 600px) {
  section nav ul {
    padding: 1rem;
    gap: 1.5rem 2rem;
  }
}
</style>
