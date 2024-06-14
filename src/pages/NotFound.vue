<script setup lang="ts">
import { useHead } from '@unhead/vue'

const name = $site.name

useHead({
  title: `找不到页面 | ${$site.title}`
})
</script>

<template>
  <div>
    <h1>404 Not Found</h1>
    <p>「{{ name }}」偷走了重要的页面！？</p>
    <RouterLink to="/">返回首页</RouterLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;
  color: white;
  padding: .5rem;
  text-align: center;
}

h1 {
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
}

p {
  font-size: 1.2rem;
}

a {
  display: block;
  padding: .8rem 2rem;
  border: 1px solid white;
  border-radius: 5px;
  background: transparent;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  background: white;
  color: black;
}
</style>
