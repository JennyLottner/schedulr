<template>
  <div class="custom-selector" @click.stop.prevent>
    <section v-if="type === 'sort-col'">
      <div class="display-selected flex align-center" @click="toggleOptions('sort-col', index)">
        <input type="text" :value="filterBy.sort[index].col" placeholder="Choose column"/>
        <!--add @input to search the options  in line above this-->
        <button class="remove-btn" v-if="filterBy.sort[index].col"></button>
        <button class="more-btn">
          <svg  :style="{ transform: isOpen ? 'rotate(180deg)' : '' }"     width="16px"  height="10px"  viewBox="0 -4.5 20 20"  version="1.1">  <g    id="Page-1"    stroke="none"    stroke-width="1"    fill="none"    fill-rule="evenodd"  >    <g      id="Dribbble-Light-Preview"      transform="translate(-220.000000, -6684.000000)"      fill="currentColor"    >      <g id="icons" transform="translate(56.000000, 160.000000)">        <path          d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"          id="arrow_down-[#338]"        ></path>      </g>    </g>  </g></svg>
        </button>
      </div>

      <div v-if="isOpen" class="dropdown-options">
        <ul class="flex column">
          <li
            v-for="(col, idx) in sortCols"  :key="idx"  @click="$emit('handle-sort', col)" :class="isSelected(col)">
            <!-- <div v-html="colIcons[col]"></div> -->
            {{ col }}
          </li>
        </ul>
      </div>
    </section>

    <section v-if="type === 'sort-dir'">
      <div class="display-selected flex" @click="toggleOptions('sort-dir', index)">
        <input type="text" :value="getSortDirection()" />
        <button class="more-btn">
          <svg  :style="{ transform: isOpen ? 'rotate(180deg)' : '' }"     width="16px"  height="10px"  viewBox="0 -4.5 20 20"  version="1.1">  <g    id="Page-1"    stroke="none"    stroke-width="1"    fill="none"    fill-rule="evenodd"  >    <g      id="Dribbble-Light-Preview"      transform="translate(-220.000000, -6684.000000)"      fill="currentColor"    >      <g id="icons" transform="translate(56.000000, 160.000000)">        <path          d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"          id="arrow_down-[#338]"        ></path>      </g>    </g>  </g></svg>
        </button>
      </div>

      <div v-if="isOpen" class="dropdown-options">
        <ul class="flex column">
          <li @click="$emit('handle-sort', 1)" :class="isSelected(1)">
            <svg version="1.0" width="15" height="15" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><g transform="translate(512,0) scale(-0.1,0.1)" fill="#323338" stroke="none"><path d="M980 4398 c-18 -13 -41 -39 -51 -58 -18 -33 -19 -95 -19 -1570 l0 -1535 -87 87 c-103 100 -116 108 -180 108 -90 0 -153 -63 -153 -153 0 -27 5 -58 11 -70 16 -31 459 -475 491 -493 35 -18 111 -18 146 0 15 8 134 122 264 253 255 257 260 263 243 350 -10 55 -69 109 -126 118 -66 10 -108 -12 -203 -105 -45 -44 -85 -80 -89 -80 -4 0 -7 690 -7 1533 0 1511 0 1532 -20 1565 -44 72 -152 96 -220 50z"/><path d="M2063 4299 c-57 -28 -83 -72 -83 -140 0 -66 28 -111 86 -139 39 -19 62 -20 600 -20 l560 0 44 23 c48 24 90 88 90 137 0 49 -42 113 -90 138 l-44 22 -561 0 c-548 0 -561 0 -602 -21z"/><path d="M2060 3231 c-105 -55 -109 -209 -8 -271 32 -19 52 -20 828 -20 776 0 796 1 828 20 101 62 97 216 -8 271 -33 18 -75 19 -820 19 -745 0 -787 -1 -820 -19z"/><path d="M2052 2160 c-101 -62 -97 -216 8 -271 33 -18 81 -19 1033 -19 l999 0 38 21 c100 57 106 201 10 267 l-33 22 -1011 0 c-991 0 -1012 0 -1044 -20z"/><path d="M2063 1099 c-57 -28 -83 -72 -83 -140 0 -66 28 -111 86 -139 40 -20 64 -20 1240 -20 l1200 0 44 23 c48 24 90 88 90 137 0 49 -42 113 -90 138 l-44 22 -1201 0 c-1197 0 -1200 0 -1242 -21z"/></g></svg>
            <span>Ascending</span>
          </li>
          <li @click="$emit('handle-sort', -1)" :class="isSelected(-1)">
            <svg version="1.0" width="15" height="15" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><g transform="translate(512,0) scale(-0.1,0.1)" fill="#323338" stroke="none"><path d="M895 4466 c-16 -8 -150 -135 -297 -282 -256 -258 -266 -271 -273 -315 -18 -118 91 -214 202 -179 26 9 74 48 155 128 l118 116 2 -1596 c3 -1595 3 -1597 24 -1624 39 -53 71 -69 134 -69 63 0 95 16 134 69 21 27 21 31 26 1622 l5 1594 110 -111 c61 -61 124 -117 142 -125 74 -32 152 -7 200 65 25 37 30 91 13 138 -14 37 -526 551 -567 569 -40 17 -89 17 -128 0z"/><path d="M2015 4306 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8 449 -10 1354 -8 1312 3 1317 3 1344 24 53 39 69 71 69 134 0 63 -16 95 -69 134 -27 21 -31 21 -1354 23 -1088 2 -1332 0 -1357 -11z"/><path d="M2015 3186 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 25 -8 353 -10 1034 -8 989 3 997 3 1024 24 53 39 69 71 69 134 0 63 -16 95 -69 134 -27 21 -35 21 -1034 23 -822 2 -1013 0 -1037 -11z"/><path d="M2015 2066 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 25 -8 257 -10 714 -8 665 3 677 3 704 24 53 39 69 71 69 134 0 63 -16 95 -69 134 -27 21 -38 21 -714 23 -556 2 -693 0 -717 -11z"/><path d="M2015 946 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 24 -7 160 -10 394 -8 342 3 358 4 384 24 53 39 69 71 69 134 0 63 -16 95 -69 134 -26 20 -41 21 -394 23 -290 2 -373 0 -397 -11z"/></g></svg>
            <span>Descending</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
// import colIcons from '@/assets/pics/columnIcons.js'

export default {
  props: {
    filterBy: { type: Object, required: true },
    type: { type: String, required: true }, // 'sort-col' or 'sort-dir'
    index: { type: Number, required: true },
    currSortOptions: { type: Object, required: true },
    isOpen: { type: Boolean, required: true },
  },
  data() {
    return {
      allSortCols: ['Item', 'Person', 'Status', 'Date'],
      // colIcons,
      allSortDirs: ['Ascending', 'Descending'],
      // dirIcons,
    }
  },
  methods: {
    toggleOptions(type, index) {
      this.$emit('toggle-sort-options', type, index)
    },
    handleOutsideClick(event) {  // Handle closing options modals
      if (
        !event.target.closest('.custom-selector') || event.target.closest('.custom-selector')
      ) { this.$emit('toggle-sort-options', '', null)}
    },
  },
  computed: {
    sortCols() {  // Only display columns not filtered yet
      return this.allSortCols.filter(col => !this.filterBy.sort.some(sortItem => sortItem.col === col) || this.filterBy.sort[this.index].col === col)
    },
    getSortDirection() {  // Translate 1/-1 to word
      return () => this.filterBy.sort[this.index].dir === 1 ? 'Ascending' : 'Descending'
    },
    isSelected() {   // Handle class for selected styling
      return (val) => ({ selected: this.filterBy.sort[this.index].dir === val || this.filterBy.sort[this.index].col === val })
    },
  },
  mounted() {
    // Listen for click events to close the dropdown
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    document.removeEventListener('click', this.handleOutsideClick)
  },
}
</script>

<style scoped lang="scss">
@import "../../style/setup/vars";
@import "../../style/setup/mixins";

.custom-selector {
  position: relative;
  font-family: Figtree, Roboto;
  font-size: 0.85rem;

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
    top: 2.85rem;
    width: 100%;
    z-index: 1;

    padding: 0.25rem 0.5rem;
    background-color: white;
    border-radius: $border-radius-xs;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 17px 6px;

    li {
      @include clearBtn;
      padding: 0.25rem 0.5rem;
      cursor: pointer;

      gap: 0.5rem;
    }
  }
}
</style>