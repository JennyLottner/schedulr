<template>
  <div class="forms-of-table">
    <nav>
      <div class="prefs flex">
        <li
          v-for="pref in visibilityPrefs"
          :key="pref"
          class="pref-item flex center"
          v-bind:class="selectedPref === pref ? 'selected' : ''"
          @click="setPref(pref)"
        >
          <span v-if="pref === 'All Sprints'" class="all-sprints-icon">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="16"
              height="16"
              aria-hidden="true"
              class="icon_90dcd5fe7a egsFo"
              data-testid="icon"
            >
              <path
                d="M9.56992 2.1408C9.82591 1.95307 10.1741 1.95307 10.4301 2.1408L17.7028 7.47413C17.8896 7.61113 18 7.82894 18 8.06061V16.7879C18 17.1895 17.6744 17.5152 17.2727 17.5152H11.9394C11.5377 17.5152 11.2121 17.1895 11.2121 16.7879V13.1515H8.78788V16.7879C8.78788 17.1895 8.46227 17.5152 8.06061 17.5152H2.72727C2.32561 17.5152 2 17.1895 2 16.7879V8.06061C2 7.82894 2.11037 7.61113 2.29719 7.47413L9.56992 2.1408ZM3.45455 8.42914V16.0606H7.33333V12.4242C7.33333 12.0226 7.65894 11.697 8.06061 11.697H11.9394C12.3411 11.697 12.6667 12.0226 12.6667 12.4242V16.0606H16.5455V8.42914L10 3.62914L3.45455 8.42914Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <p>{{ pref }}</p>
          <span class="more">
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
          </span>
        </li>
      </div>
      <Divider />
    </nav>
  </div>
</template>

<script>
import Divider from "@/cmps/helpers/Divider.vue";
export default {
  components: { Divider },
  props: {
    visibilityPrefs: {
      type: Array,
      required: true,
    },
    selectedPref: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../../../style/setup/vars";

.forms-of-table {
  nav {
    .prefs {
      li {
        cursor: pointer;
        padding: 4px 20px;
        gap: 8px;
        height: 30px;

        .all-sprints-icon {
          margin-inline-end: 4px;
        }

        .more {
          display: none;
        }

        &:hover {
          background-color: $primary-background-hover-color;
          border-radius: $border-radius-xs;

          .more {
            display: inline;
          }
        }

        &.selected {
          border-bottom: 2px solid $green-dark;
          border-end-start-radius: 0px;
          border-end-end-radius: 0px;
          margin-block-end: -1px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>