<template>
  <section class="main-page grid">
    <AppHeader class="app-header"/>
    <NavBar class="nav-bar"/>
    <main>
      <RouterView />
    </main>
  </section>
</template>

<script>
import AppHeader from '../cmps/AppHeader.vue'
import NavBar from '../cmps/NavBar.vue'

export default {
  components: { AppHeader, NavBar }
}
</script>

<style lang="scss">
@import "../style/setup/vars";

.main-page {
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
  background-color: $green-background;

  grid-template-columns: 1fr 5fr;
  grid-template-rows: 2.7rem 1fr;
  column-gap: 0.625rem;

  .app-header {
    grid-area: 1 / 1 / 2 / 3;
  }

  .nav-bar {
    grid-area: 2 / 1 / 3 / 2;
    border-radius: 0 0.5rem 0 0;
  }
  
  main {
    grid-area: 2 / 2 / 3 / 3;
    border-radius: 0.5rem 0 0 0;
  }
}
</style>