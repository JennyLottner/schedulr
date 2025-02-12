<template>
  <div class="custom-selector" @click.stop.prevent>
    <section v-if="type === 'sort-col'">
      <div class="display-selected flex align-center" @click="toggleOptions('sort-col', index)">
        <input type="text" :value="filterBy.sort[index].col" placeholder="Choose column"/>
        <!--add @input to search the options  in line above this-->
        <button class="remove-btn" v-if="filterBy.sort[index].col"></button>
        <button class="more-btn">
          <svg  :style="{ transform: isOpen ? 'rotate(180deg)' : '' }"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  width="16px"  height="10px"  viewBox="0 -4.5 20 20"  version="1.1">  <g    id="Page-1"    stroke="none"    stroke-width="1"    fill="none"    fill-rule="evenodd"  >    <g      id="Dribbble-Light-Preview"      transform="translate(-220.000000, -6684.000000)"      fill="#68697a"    >      <g id="icons" transform="translate(56.000000, 160.000000)">        <path          d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"          id="arrow_down-[#338]"        ></path>      </g>    </g>  </g></svg>
        </button>
      </div>

      <div v-if="isOpen" class="dropdown-options">
        <ul class="flex column">
          <li
            v-for="(col, idx) in sortCols"  :key="idx"  @click="$emit('handle-sort', col)">
            <!-- <div v-html="colIcons[col]"></div> -->
            {{ col }}
          </li>
        </ul>
      </div>
    </section>

    <section v-if="type === 'sort-dir'">
      <div class="display-selected flex" @click="toggleOptions('sort-dir', index)">
        <input type="text" :value="filterBy.sort[index].dir" />
        <button class="more-btn">
          <svg  :style="{ transform: isOpen ? 'rotate(180deg)' : '' }"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  width="16px"  height="10px"  viewBox="0 -4.5 20 20"  version="1.1">  <g    id="Page-1"    stroke="none"    stroke-width="1"    fill="none"    fill-rule="evenodd"  >    <g      id="Dribbble-Light-Preview"      transform="translate(-220.000000, -6684.000000)"      fill="#68697a"    >      <g id="icons" transform="translate(56.000000, 160.000000)">        <path          d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"          id="arrow_down-[#338]"        ></path>      </g>    </g>  </g></svg>
        </button>
      </div>

      <div v-if="isOpen" class="dropdown-options">
        <ul class="flex column">
          <li @click="$emit('handle-sort', 1)">
            <!-- <svg></svg> -->
            <span>Ascending</span>
          </li>
          <li @click="$emit('handle-sort', -1)">
            <!-- <svg></svg> -->
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
    handleOutsideClick(event) {  // handle closing options modals
      if (
        !event.target.closest('.custom-selector') || event.target.closest('.custom-selector')
      ) { this.$emit('toggle-sort-options', '', null)}
    },
  },
  computed: {
    sortCols() {
      return this.allSortCols.filter(col => !this.filterBy.sort.some(sortItem => sortItem.col === col))
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
    top: 2.85rem;
    width: 100%;
    z-index: 1;

    padding: 0.25rem 0.5rem;
    background-color: white;
    border-radius: $border-radius-xs;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 17px 6px;

    li {
      height: 2.6rem;
      padding: 0.25rem 0.5rem;
      border-radius: $border-radius-xs;
      cursor: pointer;

      display: flex;
      align-items: center;

      &:hover {
        background-color: $primary-background-hover-color;
      }
    }
  }
}
</style>