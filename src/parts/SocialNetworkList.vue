<script setup lang="ts">
import FontAwesomeIcon from '@/icon'
import { parseIcon } from '@/icon'
const { social_networks, contact_email } = $site
</script>

<template>
  <section>
    <nav>
      <ul>
        <li v-for="platform in social_networks" :key="platform.name">
          <a target="_blank" :href="platform.url" :title="platform.name">
            <FontAwesomeIcon :icon="parseIcon(platform.icon)" />
          </a>
        </li>
        <li>
          <ClientOnly>
            <a :href="`mailto:${contact_email}`" title="Email">
              <FontAwesomeIcon :icon="['fas', 'envelope']" />
            </a>
          </ClientOnly>
        </li>
        <li>
          <RouterLink to="/novels/list" title="小说">
            <FontAwesomeIcon :icon="['fas', 'newspaper']" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/artworks" title="歌声合成工程">
            <FontAwesomeIcon :icon="['fas', 'circle-right']" />
          </RouterLink>
        </li>
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

section nav ul a {
  display: flex;
  font-size: 2rem;
  opacity: .75;
  color: #007acc;
  transition: all .3s ease-in;
}

section nav ul a:hover {
  color: #129efc;
  opacity: .5;
  transition: all .3s ease-out;
}

@media screen and (max-width: 600px) {
  section nav ul {
    padding: 1rem;
    gap: 1.5rem 2rem;
  }

  section nav ul a {
    font-size: 1.8rem;
  }
}
</style>
