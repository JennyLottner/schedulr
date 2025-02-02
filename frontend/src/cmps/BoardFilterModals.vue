<template>
  <div class="modal">
    <article v-if="selected === 'more'" class="more-modal">
      <button class="more-btn">
        <svg  viewBox="0 0 20 20"  fill="currentColor"  width="16"  height="16"  role="img"  tabindex="0"  aria-hidden="false"  aria-label="New group of items"  class="icon_35c1b9ef14 icon-service-icon noFocusStyle_e846aee9b1"  data-testid="icon">  <path d="M16 4.5H7.5L7.5 15.5H16C16.2761 15.5 16.5 15.2761 16.5 15V5C16.5 4.72386 16.2761 4.5 16 4.5ZM4 4.5H6L6 15.5H4C3.72386 15.5 3.5 15.2761 3.5 15V5C3.5 4.72386 3.72386 4.5 4 4.5ZM4 3C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3H4ZM15 14V9H9V14H15Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"  ></path> </svg>
        New group of items
      </button>
    </article>

    <article v-else-if="selected === 'search'" class="search-modal">
      <form>
        <input type="text" :value="filterBy.txt" @input="updateFilter('txt', $event.target.value)"  placeholder="Search this board"/>
      </form>
    </article>

    <article v-else-if="selected === 'person'" class="person-modal">
      <h2>Filter this board by person</h2>
      <p>And find items they're working on.</p>
      <form>
        <select :value="filterBy.person" @change="updateFilter('person', $event.target.value)">
          <option value="">Choose person</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </form>
    </article>

    <article v-else-if="selected === 'filter'" class="filter-modal">
      <form>
        <select :value="filterBy.filter" @change="updateFilter('filter', $event.target.value)">
          <option value="" disabled hidden>Choose something</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </form>
    </article>

    <article v-else-if="selected === 'sort'" class="sort-modal">
      <h2>Sort By</h2>
      <form class="flex">
        <select :value="filterBy.sort.col" @change="updateFilter(['sort', 'col'], $event.target.value)">
          <option value="" disabled hidden>Choose column</option>
        </select>
        <select :value="filterBy.sort.dir" @change="updateFilter(['sort', 'dir'], $event.target.value)">
          <option value="1">Ascending</option>
          <option value="-1">Descending</option>
        </select>
      </form>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    selected: { type: String, required: true },
    filterBy: {type: Object, required: true},
  },
  methods: {
    updateFilter(field, value) {
      this.$emit('update-filter', field, value)  
    },
  },

}
</script>

<style scoped lang="scss">
@import "../style/setup/vars";

article {
      position: absolute;
      top: 2.5rem;

      background-color: white;
      padding: 1.25rem 1rem 1rem;
      border-radius: $border-radius-s;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 17px 6px;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        font-size: 1rem;
        font-weight: normal;
      }

      p {
        font-size: 0.875rem;
      }

      button {
        background-color: transparent;

        &:hover {
          background-color: $primary-background-hover-color;
        }
      }

      form {
        column-gap: 0.5rem;
      }
    }
</style>