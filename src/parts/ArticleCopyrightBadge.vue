<script setup lang="ts">
defineProps<{
  title: string,
  year: number,
  path: string,
}>()
</script>

<template>
  <p>
    <div>
      &copy; {{ year }} <a href="https://tcproducer.xyz/">传输控制协议 TCP</a><br>
      适用 <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans" target="_blank">CC BY-NC-ND 4.0</a>
      许可，参见 <RouterLink to="/copyright">版权声明</RouterLink> 页面了解更多。<br>
      转载请注明此链接: <a :href="path">{{ title }}</a>
    </div>
    <div class="cc-badge">
      <img src="@/assets/creativecommons/cc.svg" alt="CreativeCommons 许可证 Badge: CC">
      <img src="@/assets/creativecommons/by.svg" alt="CreativeCommons 许可证 Badge: BY">
      <img src="@/assets/creativecommons/nc.svg" alt="CreativeCommons 许可证 Badge: NC">
      <img src="@/assets/creativecommons/nd.svg" alt="CreativeCommons 许可证 Badge: ND">
    </div>
  </p>
</template>

<style scoped>
p {
  font-size: .9rem;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 2px solid #007acc;
  border-radius: .5rem;
  line-height: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cc-badge {
  display: flex;
  gap: .2rem;
}

img {
  height: 1.8rem;
  margin-left: .2rem;
}
</style>
