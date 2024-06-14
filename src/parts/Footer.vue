<script setup lang="ts">
const year = new Date().getFullYear()
const { name, footer: links } = $site
</script>

<template>
  <footer>
      Copyright &copy; {{ year }} {{ name }}
      <p>
        <RouterLink v-for="link in links" :key="link.url" :to="link.url">{{ link.name }}</RouterLink>
      </p>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .8rem;
  text-align: center;
  color: white;
}

footer p {
  margin-top: .25rem;
}

footer a {
  color: white;
  margin-right: .25rem;
  text-decoration: none;
  transition: color .3s ease;
}

footer a:hover {
  color: #007acc;
  transition: color .3s ease;
}

footer a::after {
  content: '|';
  margin-left: .25rem;
  color: white;
}

footer a:last-child::after {
  content: '';
  margin-left: 0;
}
</style>
