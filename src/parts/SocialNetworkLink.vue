<script setup lang="ts">
import FontAwesomeIcon from '@/icon'

const { to } = defineProps<{ to: string, title: string, icon: string[] }>()
const external = to.startsWith('https://') || to.startsWith('http://') || to.startsWith('mailto:')
</script>

<template>
  <li>
    <RouterLink :to="to" :title="title" v-if="!external">
      <FontAwesomeIcon :icon="icon" />
    </RouterLink>
    <a :href="to" :title="title" target="_blank" v-else>
      <FontAwesomeIcon :icon="icon" />
    </a>
    <span>{{ title }}</span>
  </li>
</template>

<style scoped>
li {
  display: flex;
  flex-direction: column;
  align-items: center;
}

li a {
  display: flex;
  font-size: 2rem;
  opacity: .75;
  color: #007acc;
  transition: all .3s ease-in;
}

li span {
  display: block;
  margin-top: .5rem;
  color: white;
  font-size: .9rem;
}

li a:hover {
  color: #129efc;
  opacity: .5;
  transition: all .3s ease-out;
}

@media screen and (max-width: 600px) {
  li a {
    font-size: 1.8rem;
  }
}
</style>
