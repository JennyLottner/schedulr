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
            @input="$emit('update-filter', 'txt', $event.target.value)"
            placeholder="Search this board"
          />
        </div>
      </form>
    </article>

    <article v-else-if="selected === 'person'" class="person-modal">
      <h2>Filter this board by person</h2>
      <p>And find items they're working on.</p>
      <form>
        <ul class="grid align-center">
          <li v-for="user in users" :key="user.id">
            <button
              @click.prevent="$emit('update-filter', 'person', user.id)"
              :title="user.fullName"
            >
              <img :src="user.imgUrl" :alt="user.fullName" />
            </button>
          </li>
          <li>
            <button
              @click.prevent="$emit('update-filter', 'person', '')"
              title="all users"
              class="flex center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 1792 1792"
                xml:space="preserve"
              >
                <path
                  d="M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4  c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1  c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </form>
    </article>

    <article v-else-if="selected === 'filter'" class="filter-modal">
      <form>
        <select
          :value="filterBy.filter"
          @change="$emit('update-filter', 'filter', $event.target.value)"
        >
          <option value="" disabled hidden>Choose something</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </form>
    </article>

    <article v-else-if="selected === 'sort'" class="sort-modal">
      <div class="sort-title flex align-center">
        <h2>Sort by</h2>
        <button
          class="flex center"
          title="Sort columns by priority, deadline or any other column on this board."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#68697a"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999"
              stroke="#68697a"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 18.01L12.01 17.9989"
              stroke="#68697a"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <form>
        <ul class="grid">
          <li
            class="grid"
            v-for="(sortObj, index) in filterBy.sort"
            :key="index"
            @click="currIdx = sortObj.idx"
          >
            <button
              class="drag-hook flex center"
              :class="filterBy.sort.length > 1 ? '' : 'disabled'"
            >
              <svg viewBox="0 0 16 16" fill="#323338" width="22" height="22">
                <path
                  d="M7.5 4C6.67157 4 6 3.32843 6 2.5 6 1.67157 6.67157 1 7.5 1 8.32843 1 9 1.67157 9 2.5 9 3.32843 8.32843 4 7.5 4zM12.5 4C11.6716 4 11 3.32843 11 2.5 11 1.67157 11.6716 1 12.5 1 13.3284 1 14 1.67157 14 2.5 14 3.32843 13.3284 4 12.5 4zM7.5 9C6.67157 9 6 8.32843 6 7.5 6 6.67157 6.67157 6 7.5 6 8.32843 6 9 6.67157 9 7.5 9 8.32843 8.32843 9 7.5 9zM12.5 9C11.6716 9 11 8.32843 11 7.5 11 6.67157 11.6716 6 12.5 6 13.3284 6 14 6.67157 14 7.5 14 8.32843 13.3284 9 12.5 9zM7.5 14C6.67157 14 6 13.3284 6 12.5 6 11.6716 6.67157 11 7.5 11 8.32843 11 9 11.6716 9 12.5 9 13.3284 8.32843 14 7.5 14zM7.5 19C6.67157 19 6 18.3284 6 17.5 6 16.6716 6.67157 16 7.5 16 8.32843 16 9 16.6716 9 17.5 9 18.3284 8.32843 19 7.5 19zM12.5 14C11.6716 14 11 13.3284 11 12.5 11 11.6716 11.6716 11 12.5 11 13.3284 11 14 11.6716 14 12.5 14 13.3284 13.3284 14 12.5 14zM12.5 19C11.6716 19 11 18.3284 11 17.5 11 16.6716 11.6716 16 12.5 16 13.3284 16 14 16.6716 14 17.5 14 18.3284 13.3284 19 12.5 19z"
                  fill="#323338"
                ></path>
              </svg>
            </button>

            <CustomSelector
              type="sort-col"
              :filterBy="filterBy"
              :currIdx="currIdx"
              @handle-sort="$emit('handle-sort', 'update col', sortObj.idx, $event)"
            />

            <CustomSelector
              type="sort-dir"
              :filterBy="filterBy"
              :currIdx="currIdx"
              @handle-sort="$emit('handle-sort', 'update dir', sortObj.idx, $event)"
            />

            <button
              class="delete-sort-btn flex center"
              @click.prevent="$emit('handle-sort', 'remove', sortObj.idx)"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path
                  d="M6.331 5.27a.75.75 0 0 0-1.06 1.06L8.94 10l-3.67 3.668a.75.75 0 1 0 1.06 1.06L10 11.06l3.668 3.669a.75.75 0 0 0 1.06-1.06l-3.668-3.67 3.67-3.669a.75.75 0 0 0-1.061-1.06L10 8.939l-3.669-3.67Z"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
        <button
          class="add-new-sort"
          @click.prevent="$emit('handle-sort', 'add')"
        >
          + New sort
        </button>
      </form>
    </article>
  </div>
</template>

<script>
import CustomSelector from "./helpers/CustomSelector.vue"

export default {
  props: {
    selected: { type: String, required: true },
    filterBy: { type: Object, required: true },
  },
  data() {
    return {
      currIdx: 0,  // Current sort obj idx
      users: [
        { id: 1, fullName: 'Jenny Tover', imgUrl: 'https://robohash.org/jennyTover.png?set=set5' },
        { id: 2, fullName: 'Shoval Sabag', imgUrl: 'https://robohash.org/shovalSabag.png?set=set5' },
        { id: 3, fullName: 'Guest', imgUrl: 'https://robohash.org/guest.png?set=set5' },
      ],
    }
  },
  components: { CustomSelector },
}
</script>

<style scoped lang="scss">
@import "../style/setup/vars";

article {
  position: absolute;
  top: 2.5rem;

  color: $font-color;
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
    border-radius: $border-radius-xs;

    &:hover {
      background-color: $primary-background-hover-color;
    }
  }

  form {
    column-gap: 0.5rem;
  }

  &.more-modal {
    padding: 0.5rem;
    left: 75%;

    gap: 0;

    .more-btn {
      grid-template-columns: 1rem 1fr;
      column-gap: 0.5rem;

      text-align: start;
      padding: 0.5rem 1rem 0.5rem 0.5rem;
    }
  }

  &.search-modal .search-bar {
    padding: 0.4rem 0.25rem 0.4rem 0.375rem;
    border: 1px $app-gray solid;

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

  &.person-modal {
    max-width: 20rem;

    gap: 0.5rem;

    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }

    ul {
      padding: 0.5rem 0.2rem;
      overflow-x: scroll;

      grid-auto-flow: column;
      grid-auto-columns: 2.5rem;
      column-gap: 0.5rem;

      li {
        width: 2.5rem;
        height: 2.5rem;
        background-color: $app-gray;
        border-radius: 50%;
        overflow: hidden;

        &:hover {
          scale: 1.1;
        }

        button,
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  &.filter-modal {
    right: 0;
  }

  &.sort-modal {
    right: 0;

    .sort-title {
      margin-block-end: 0.9rem;
      gap: 0.5rem;

      button:hover {
        background-color: transparent;
      }

      svg {
        height: 1.12rem;
        width: 1.12rem;
      }
    }

    form {
      overflow: visible;

      ul {
        margin-block-end: 0.9rem;

        grid-auto-flow: row;
        gap: 0.5rem;

        li {
          grid-template-columns: 1rem 1fr 1fr 1.5rem;
          gap: 0.5rem;

          .drag-hook {
            cursor: move;

            &.disabled {
              cursor: not-allowed;
            }

            &:hover {
              background-color: transparent;
            }
          }

          .delete-sort-btn {
            color: $svg-color;

            &:hover {
              color: $font-color;
              background-color: transparent;
            }
          }
        }
      }
    }

    .add-new-sort {
      height: 2rem;
      line-height: 1.5rem;
      padding: 0.25rem 0.5rem;
    }
  }
}
</style>