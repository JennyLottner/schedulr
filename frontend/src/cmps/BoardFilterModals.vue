<template>
  <div class="modal">
    <article v-if="selected === 'more'" class="more-modal">
      <button class="more-btn grid align-center">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          role="img"
          tabindex="0"
          aria-hidden="false"
          aria-label="New group of items"
          class="icon_35c1b9ef14 icon-service-icon noFocusStyle_e846aee9b1"
          data-testid="icon"
        >
          <path
            d="M16 4.5H7.5L7.5 15.5H16C16.2761 15.5 16.5 15.2761 16.5 15V5C16.5 4.72386 16.2761 4.5 16 4.5ZM4 4.5H6L6 15.5H4C3.72386 15.5 3.5 15.2761 3.5 15V5C3.5 4.72386 3.72386 4.5 4 4.5ZM4 3C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3H4ZM15 14V9H9V14H15Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        New item
      </button>
      <button class="more-btn grid align-center">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          role="img"
          tabindex="0"
          aria-hidden="false"
          aria-label="New group of items"
          class="icon_35c1b9ef14 icon-service-icon noFocusStyle_e846aee9b1"
          data-testid="icon"
        >
          <path
            d="M16 4.5H7.5L7.5 15.5H16C16.2761 15.5 16.5 15.2761 16.5 15V5C16.5 4.72386 16.2761 4.5 16 4.5ZM4 4.5H6L6 15.5H4C3.72386 15.5 3.5 15.2761 3.5 15V5C3.5 4.72386 3.72386 4.5 4 4.5ZM4 3C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3H4ZM15 14V9H9V14H15Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        New group of items
      </button>
    </article>

    <article v-else-if="selected === 'search'" class="search-modal">
      <form>
        <div class="search-bar grid align-center">
          <svg
            viewBox="0 0 20 20"
            fill="#68697a"
            width="16px"
            height="16px"
            aria-hidden="true"
            class="icon_a2927e1dcf icon_82075aab38"
            data-testid="icon"
          >
            <path
              d="M8.65191 2.37299C6.9706 2.37299 5.35814 3.04089 4.16927 4.22976C2.9804 5.41863 2.3125 7.03108 2.3125 8.7124C2.3125 10.3937 2.9804 12.0062 4.16927 13.195C5.35814 14.3839 6.9706 15.0518 8.65191 15.0518C10.0813 15.0518 11.4609 14.5691 12.5728 13.6939L16.4086 17.5303C16.7014 17.8232 17.1763 17.8232 17.4692 17.5303C17.7621 17.2375 17.7622 16.7626 17.4693 16.4697L13.6334 12.6333C14.5086 11.5214 14.9913 10.1418 14.9913 8.7124C14.9913 7.03108 14.3234 5.41863 13.1346 4.22976C11.9457 3.04089 10.3332 2.37299 8.65191 2.37299ZM12.091 12.1172C12.9878 11.2113 13.4913 9.98783 13.4913 8.7124C13.4913 7.42891 12.9815 6.19798 12.0739 5.29042C11.1663 4.38285 9.9354 3.87299 8.65191 3.87299C7.36842 3.87299 6.1375 4.38285 5.22993 5.29042C4.32237 6.19798 3.8125 7.42891 3.8125 8.7124C3.8125 9.99589 4.32237 11.2268 5.22993 12.1344C6.1375 13.0419 7.36842 13.5518 8.65191 13.5518C9.92736 13.5518 11.1509 13.0483 12.0568 12.1514C12.0623 12.1455 12.0679 12.1397 12.0737 12.134C12.0794 12.1283 12.0851 12.1227 12.091 12.1172Z"
              fill="#68697a"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        <input
          type="text"
          :value="filterBy.txt"
          @input="updateFilter('txt', $event.target.value)"
          placeholder="Search this board"
        />
      </div>
      </form>
    </article>

    <article v-else-if="selected === 'person'" class="person-modal">
      <h2>Filter this board by person</h2>
      <p>And find items they're working on.</p>
      <form>
        <select
          :value="filterBy.person"
          @change="updateFilter('person', $event.target.value)"
        >
          <option value="">Choose person</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </form>
    </article>

    <article v-else-if="selected === 'filter'" class="filter-modal">
      <form>
        <select
          :value="filterBy.filter"
          @change="updateFilter('filter', $event.target.value)"
        >
          <option value="" disabled hidden>Choose something</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </form>
    </article>

    <article v-else-if="selected === 'sort'" class="sort-modal">
      <h2>Sort By</h2>
      <form class="flex">
        <select
          :value="filterBy.sort.col"
          @change="updateFilter(['sort', 'col'], $event.target.value)"
        >
          <option value="" disabled hidden>Choose column</option>
        </select>
        <select
          :value="filterBy.sort.dir"
          @change="updateFilter(['sort', 'dir'], $event.target.value)"
        >
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
    filterBy: { type: Object, required: true },
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

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h2 {
    font-size: 1rem;
    font-weight: normal;
  }

  p {
    line-height: 24px;
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

.more-modal {
  padding: 0.5rem;

  gap: 0;

  .more-btn {
    grid-template-columns: 1rem 1fr;
    column-gap: 0.5rem;

    text-align: start;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border-radius: $border-radius-xs;
  }
}

.search-modal .search-bar {
  padding: 0.4rem 0.25rem 0.4rem 0.375rem;
  border: 1px $app-gray solid;
  border-radius: $border-radius-xs;

  grid-template-columns: 1rem minmax(12rem, 1fr);
  column-gap: 0.5rem;

  input {
    background-color: transparent;
    border: none;

    &:focus-visible {
      outline: none;
    }

    svg {
      color: $svg-color;
    }

    caret-color: $font-color;
  }
}
</style>