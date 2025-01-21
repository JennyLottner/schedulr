<template>
  <section class="home-page">
    <header class="flex align-center">
      <div class="greetings flex column">
        <p>Good [morning/night], [user_name/Guest]</p>
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