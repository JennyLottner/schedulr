<template>
  <div class="home-page-container">
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

      <section class="content-container">
        <Accordion :accordionTitle="'Recently visited'">
          <div class="boards-container grid">
            <!-- repeat board card for user boards -->
            <RouterLink to="board">
              <!--add id to link-->
              <BoardCard :boardName="'Sample board'" />
            </RouterLink>
            <RouterLink to="board">
              <BoardCard :boardName="'Another board'" />
            </RouterLink>
            <RouterLink to="board">
              <BoardCard :boardName="'Another board'" />
            </RouterLink>
            <RouterLink to="board">
              <BoardCard :boardName="'Another board'" />
            </RouterLink>
          </div>
        </Accordion>
      </section>
    </section>
  </div>
</template>

<script>
import BoardCard from '@/cmps/BoardCard.vue'
import Accordion from '@/cmps/helpers/Accordion.vue';

export default {
  computed: {
    greetingByTimeOfDay() {
      const time = new Date().getHours()
      if (time >= 5 && time < 12) return 'morning'    // 5am to 12pm
      if (time >= 12 && time < 17) return 'afternoon'  // 12pm to 5pm
      if (time >= 17 && time < 20) return 'evening'    // 5pm to 8pm
      if (time >= 20 || time < 5) return 'night'       // 8pm to 5am
    },
    userName() {
      if (!!this.$store.getters['user']) return this.$store.getters['user'].split(' ')[0]
      return 'Guest'
    },
  },
  components: {
    BoardCard,
    Accordion,
  },
}
</script>

<style scoped lang="scss">
@import "../../style/setup/vars";

.home-page-container {
  overflow-y: scroll;
  height: 100%;
}

.home-page {
  color: $font-color;

  header {
    width: 100%;
    height: 4.6875rem;
    overflow: hidden;
    padding-inline: 1.25rem;
    box-shadow: 0px 3px 12px #e6e9ef;

    .greetings {
      p {
        font-size: 0.875rem;
        line-height: 1.32rem;
      }

      h2 {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.375rem;
      }
    }
  }

  .content-container {
    padding: 1.5rem;
    border-radius: $border-radius-s;
    box-shadow: 0 3px 12px #e6e9ef;
    margin: 1rem 1.25rem 2rem;

    .boards-container {
      padding: 1rem 1rem 1.5rem 1rem;

      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-auto-rows: auto;
      gap: 1.25rem;
    }
  }
}
</style>