<template>
  <div class="custom-selector" @click.stop.prevent>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, required: true }, // 'column' or 'direction'
    filterBy: { type: Object, required: true },
    currIdx: { type: Number, required: true },
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../style/setup/vars";

.custom-selector {
  position: relative;

  .display-selected {
    height: 2.375rem;
    width: 12rem;
    
    padding: 0.125rem 0.25rem 0.125rem 0.75rem;
    border: 1px solid $app-gray;
    border-radius: $border-radius-xs;

    gap: 0.5rem;
    
    &:hover {
      border: 1px solid $font-color;
    }
    
    &:active,
    &:focus-within {
      border: 2px solid $blue-btn;
    }
    
    input {
      height: 100%;
      width: 8rem;
      flex-grow: 1;
      flex-shrink: 1;
      border: none;

      &:focus {
        outline: none;
      }
    }

    .more-btn {
      height: 2rem;
      min-width: 2rem;
      background-color: transparent;
      border-radius: $border-radius-xs;

      &:hover {
        background-color: $primary-background-hover-color;
      }
    }
  }

  .dropdown-options {
    position: absolute;
    top: 3rem;
    width: 100%;
    z-index: 1;

    padding: 0.25rem 0.5rem;
    background-color: white;
    border-radius: $border-radius-xs;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 17px 6px;

    li {
      height: 2.6rem;
      border-radius: $border-radius-xs;

      &:hover {
        background-color: $primary-background-hover-color;
      }
    }
  }
}
</style>