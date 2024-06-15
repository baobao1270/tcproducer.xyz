<script setup lang="ts">
import { useHead } from '@unhead/vue'
import Content from '@/parts/Content.vue'

const pkg = $package

useHead({
  title: `开放源代码许可 | ${$site.title}`
})
</script>

<template>
  <Content title="开放源代码许可" :show-back-top="true" :nav="['开放源代码许可']">
    本站 (<code>{{ pkg.name }}</code>) 基于 {{ pkg.license }} 许可证，您可以在
    <a :href="pkg.repository.replace(/^github:/, 'https://github.com/')">源代码仓库</a> 获取源代码的副本；以下为开放源代码许可证的全文：
    <p class="license-text" v-html="pkg.license_text.replace(/\n/g, '<br>')" />

    本站使用以下第三方开源库，您可以通过下面的链接获得其开放源代码许可证的副本：
    <ul>
      <li v-for="dependency in Object.keys(pkg.dependencies)" :key="dependency">
        <a _target="blank" :href="`https://www.npmjs.com/package/${dependency}`">{{ dependency }}</a>
      </li>
    </ul>
  </Content>
</template>

<style scoped>
.license-text {
  margin-top: 1em;
  font-size: .9rem;
}
</style>
