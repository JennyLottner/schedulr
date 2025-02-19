<template>
  <section class="main-page grid">
    <AppHeader class="app-header" @toggleNavBar="toggleNavBar"/>
    <NavBar class="nav-bar" :class="isNavBar? 'isOpened' : ''" />
    <main>
      <RouterView />
    </main>
  </section>
</template>

<script>
import AppHeader from '../cmps/AppHeader.vue'
import NavBar from '../cmps/NavBar.vue'

export default {
  data() {
    return {
      isNavBar: false,
    }
  },
  methods: {
    toggleNavBar() {
      this.isNavBar = !this.isNavBar
    }
  },
  components: { AppHeader, NavBar },
}
</script>

<style lang="scss">
@import "../style/setup/vars";

.main-page {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: $blue-background;

  grid-template-rows: 3rem 1fr;
  column-gap: 0.625rem;

  .app-header {
    grid-area: 1 / 1 / 2 / 2;
  }

  .nav-bar {
      border-radius: 0 $border-radius-s 0 0;
      transition: 1s;
    }

  main {
    grid-area: 2 / 1 / 3 / 2;
    height: 100%;
    border-radius: $border-radius-s $border-radius-s 0 0;
    margin-inline: 0.5rem;
    background-color: white;
    overflow: hidden;

    ::-webkit-scrollbar {
      width: 0.625rem;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #b0b0b0;
    }
  }
}

@media (width < 600px) {
  .main-page {
    .nav-bar {
      position: absolute;
      inset: 3rem auto 0 -100%;
    }

    .isOpened {
      left: 0;
      width: 15.25rem;
      background-color: $blue-background;
      box-shadow: 5px -3px 12px $app-gray;
      z-index: 1;
    }
  }
}

@media (width > 600px) {
  .main-page {
    grid-template-columns: 15.25rem 1fr;

    .app-header {
      grid-area: 1 / 1 / 2 / 3;
    }

    .nav-bar {
      grid-area: 2 / 1 / 3 / 2;
    }

    main {
      grid-area: 2 / 2 / 3 / 3;
      border-radius: $border-radius-s 0 0 0;
      margin-inline: 0;
    }
  }
}
</style>