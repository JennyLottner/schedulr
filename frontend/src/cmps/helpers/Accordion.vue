<template>
  <section class="accordion">
    <section @click="toggleIsOpen" class="title-container flex align-center">
      <span>{{ arrow }}</span>&nbsp;
      {{ accordionTitle }}
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
  computed: {
    arrow() {
      return this.isOpen ? '▾' : '▸'
    }
  },
}
</script>

<style lang="scss">
.title-container {
  font-size: 0.875rem;
  padding: 0.5rem 0.25rem 0.5rem 0.375rem;
  border-radius: 4px;

  &:hover {
    background-color: #e7ecea;
  }
}
</style>