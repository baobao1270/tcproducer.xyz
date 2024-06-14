<script setup lang="ts">
import FontAwesomeIcon from '@/icon'

defineProps<{
  title: string
  showBackTop: boolean
}>()

function onScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <aside @click="onScrollToTop" v-if="showBackTop" title="返回顶部">
    <FontAwesomeIcon :icon="['far', 'circle-up']" />
  </aside>
  <h1>{{ title }}</h1>
  <nav>
    当前位置：
    <RouterLink to="/">首页</RouterLink>
    &nbsp;/&nbsp;
    {{ title }}
  </nav>
  <main class="global-content">
    <article>
      <slot />
    </article>
  </main>
</template>

<style scoped>
aside {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  font-size: 2rem;
  cursor: pointer;
  color: #303030;
  transition: color .3s ease-in;
}

aside:hover {
  color: #007acc;
  transition: color .3s ease-out;
}

h1 {
  font-weight: 400;
  color: white;
  margin-bottom: 5rem;
}

nav {
  font-size: .9rem;
  color: white;
  padding-bottom: .5rem;
}

nav a {
  color: #007acc;
  text-decoration: none;
  transition: color .3s ease-in;
}

nav a:hover {
  color: #f3f3f3;
  transition: color .3s ease-out;
}

main {
  width: 100%;
  background: #f3f3f3;
  color: #303030;
  min-height: 100vh;
  padding: 1.5rem;
  margin-bottom: 5rem;
  overflow: hidden;
}

nav, article {
  width: 100%;
  max-width: 800px;
  margin: auto;
}

@media screen and (max-width: 820px) {
  main {
    padding: .8rem;
  }

  nav {
    padding-left: .8rem;
    padding-right: .8rem;
  }
}

@media (prefers-color-scheme: dark) {
  main {
    background: #303030;
    color: #f3f3f3;
  }

  nav a {
    color: #007acc;
  }

  nav a:hover {
    color: #f3f3f3;
  }

  aside {
    color: #f3f3f3;
  }
}
</style>

<style>
.global-content a {
  color: #007acc;
  transition: color .3s ease-in;
}

.global-content a:hover {
  color: #7e7e7e;
  transition: color .3s ease-out;
}
</style>
