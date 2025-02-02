<template>
  <section class="home-page">
    <header class="flex align-center">
      <div class="greetings flex column">
        <p>Good {{ greetingByTimeOfDay }}, {{ userName }}!</p>
        <h2>Quickly access your recent boards, Inbox and workspaces</h2>
      </div>
      <img
        src="../../assets/pics/confetti.svg"
        alt="Confetti"
        class="header-background-img"
      />
    </header>
  </section>
</template>

<script>
export default {
  computed: {
    greetingByTimeOfDay() {
      const time = new Date().getHours()
      if (time >= 5 && time < 12 ) return 'morning'    // 5am to 12pm
      if (time >= 12 && time < 17) return 'afternoon'  // 12pm to 5pm
      if (time >= 17 && time < 20) return 'evening'    // 5pm to 8pm
      if (time >= 20 || time < 5) return 'night'       // 8pm to 5am
    },
    userName() {
      if (!!this.$store.getters['user']) return this.$store.getters['user'].split(' ')[0] 
      return 'Guest'
  }
  },
}
</script>

<style scoped lang="scss">
@import "../../style/setup/vars";

.home-page {
  header {
    width: 100%;
    box-shadow: 0px 3px 12px #e6e9ef;

    .greetings {
      padding: 1rem;

      p {
        font-size: 0.875rem;
      }

      h2 {
        font-size: 1rem;
      }
    }
  }
}
</style>