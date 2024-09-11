<template>
  <section>
    <AppHeader />
    <NavBar />
    <main>
      <RouterView />
    </main>
  </section>
</template>

<script>
import { RouterView } from 'vue-router';
import AppHeader from '../cmps/AppHeader.vue'
import NavBar from '../cmps/NavBar.vue'

export default {
  components: { AppHeader, NavBar }
}
</script>

<style lang="scss">
</style>