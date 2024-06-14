<script setup lang="ts">
const { name, slogan } = $site

function sloganTypewriterAnimate(el: Element, done: () => void, count: number = 0): void {
  const appearText = slogan.substring(0, count) as string
  (el as HTMLHeadingElement).innerText = appearText
  if (count > slogan.length) {
    done()
    return
  }
  setTimeout(() => {
    sloganTypewriterAnimate(el, done, count + 1)
  }, 500);
}
</script>

<template>
  <header>
    <nav>
      <picture>
        <img src="@/assets/tcp-avatar.webp" :alt="`「${name}」头像`" />
      </picture>
      <h1 role="website-name">{{ name }}</h1>
      <Transition @enter="sloganTypewriterAnimate" appear>
        <h2 role="slogan">{{ slogan }}</h2>
      </Transition>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  max-width: 580px;
  margin: auto;
  margin-top: 200px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}

nav picture img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  cursor: pointer;
  transition: all .5s ease-out;
}

nav picture img:hover {
  transform: rotate(-365deg);
  transition: all .5s ease-out;
}

header nav h1 {
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  min-width: 560px;
  padding-bottom: .8rem;
  border-bottom: .5px solid hsla(0,0%,100%,.8);
}

header nav h2 {
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: .8rem;
  margin-bottom: 1rem;
  text-align: center;
}

header nav h2::before {
  content: "「";
}

header nav h2::after {
  content: "」";
}

@media screen and (max-width: 600px) {
  header {
    margin-top: 50px;
  }

  header nav h1 {
    font-size: 1.5rem;
    min-width: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  header nav h2 {
    font-size: 1rem;
  }
}
</style>
