<script setup lang="ts">
import { useHead } from '@unhead/vue'
import Content from '@/parts/Content.vue'

const [site, pkg] = [$site, $package]

useHead({
  title: `开源许可证 | ${$site.title}`
})
</script>

<template>
  <Content title="开源许可证" :show-back-top="true">
    {{ site.title }} (<code>{{ pkg.name }}</code>) 网站基于 {{ pkg.license }} 许可，您可以在
    <a :href="pkg.repository.replace(/^github:/, 'https://github.com/')">源代码的 Git 仓库</a> 获取源代码的副本；以下为开放源代码许可证的全文：
    <p class="license-text" v-html="pkg.license_text.replace(/\n/g, '<br>')" />

    {{ site.title }} 同时使用以下第三方开源库，您可以通过下面的链接获取其开放源代码许可证副本：
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
