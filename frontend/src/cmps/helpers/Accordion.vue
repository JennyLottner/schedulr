<template>
  <section class="accordion">
    <section @click="toggleIsOpen" class="title-container flex align-center">
      <svg v-if="isOpen" viewBox="0 0 20 20" fill="currentColor" width="24" height="24" aria-hidden="true" class="icon_35c1b9ef14 collapsible-icon" data-testid="icon"><path d="M9.442 12.762a.77.77 0 0 0 1.116 0l4.21-4.363a.84.84 0 0 0 0-1.158.77.77 0 0 0-1.116 0L10 11.027 6.348 7.24a.77.77 0 0 0-1.117 0 .84.84 0 0 0 0 1.158l4.21 4.363Z"></path></svg>
      <svg v-else viewBox="0 0 20 20" fill="currentColor" width="24" height="24" aria-hidden="true" class="icon_35c1b9ef14 collapsible-icon" data-testid="icon"><path fill="currentColor" d="M12.76 10.56a.77.77 0 0 0 0-1.116L8.397 5.233a.84.84 0 0 0-1.157 0 .77.77 0 0 0 0 1.116l3.785 3.653-3.785 3.652a.77.77 0 0 0 0 1.117.84.84 0 0 0 1.157 0l4.363-4.211Z"></path></svg>
      <h2>{{ accordionTitle }}</h2>
    </section>
    <div v-if="isOpen">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    accordionTitle: { type: String, required: true },
  },
  data() {
    return {
      isOpen: true,
    }
  },
  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../style/setup/vars";

.title-container {
  gap: 0.25rem;
  
  h2 {
    font-size: 1.125rem;
  }
}
</style>