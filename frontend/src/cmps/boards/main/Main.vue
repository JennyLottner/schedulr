<template>
  <section class="main-board">
    <header class="flex space-between">
      <button class="title-and-arrow flex center">
        <h1>Main</h1>
        <span class="arrow">
          <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24">
            <path
              d="M10.5303 12.5303L10 12L9.46967 12.5303C9.76256 12.8232 10.2374 12.8232 10.5303 12.5303ZM10 10.9393L6.53033 7.46967C6.23744 7.17678 5.76256 7.17678 5.46967 7.46967C5.17678 7.76256 5.17678 8.23744 5.46967 8.53033L9.46967 12.5303L10 12L10.5303 12.5303L14.5303 8.53033C14.8232 8.23744 14.8232 7.76256 14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967L10 10.9393Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </button>
      <button class="settings-and-more">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="24"
          height="24"
          aria-hidden="true"
          class="icon_d6a7187c13 noFocusStyle_48049c26c1"
          data-testid="icon"
        >
          <path
            d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </header>
    <FormsOfTable
      :visibilityPrefs="visibilityPrefs"
      :selectedPref="selectedPref"
    />
  </section>
</template>

<script>
import Divider from "../../helpers/Divider.vue";
import FormsOfTable from "./FormsOfTable.vue";

export default {
  components: { Divider, FormsOfTable },
  data() {
    return {
      visibilityPrefs: ["All Sprints", "Main Table", "Kanban", "Active Sprint"],
      selectedPref: null,
    };
  },
  methods: {
    setPref(pref) {
      this.selectedPref = pref;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../style/setup/vars";

.main-board {
  height: 100%;
  padding: 18px 30px 0 38px;
  border-radius: 0.5rem 0 0 0;
  background-color: white;

  header {
    .title-and-arrow:hover,
    .settings-and-more:hover {
      background-color: $primary-background-hover-color;
    }

    .title-and-arrow,
    .settings-and-more {
      border-radius: $border-radius-xs;
    }

    .title-and-arrow {
      padding: 1px 4px;
      background-color: transparent;
      height: fit-content;
      gap: 4px;

      h1 {
        font-size: 24px;
        font-family: Poppins, Roboto;
        font-weight: 500;
      }
    }

    .settings-and-more {
      background-color: transparent;
      height: fit-content;
    }
  }
}
</style>