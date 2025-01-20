<template>
  <section class="filter-section flex">
    <div class="add-btn flex align-center">
      <button class="new-item-btn">New Item</button>
      <button class="new-more-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="18px"
          height="15px"
          viewBox="0 -4.5 20 20"
          version="1.1"
        >
          <title>arrow_down [#338]</title>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-220.000000, -6684.000000)"
              fill="#fff"
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"
                  id="arrow_down-[#338]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>

    <button class="search-btn" :class="isSelected('search')" @click="onSelect('search')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        width="15px"
        height="15px"
        viewBox="0 0 32 32"
      >
        <g id="search">
          <path
            d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"
          />
        </g>
      </svg>
      Search
    </button>

    <button class="person-btn" title="Filter board by person" :class="isSelected('person')" @click="onSelect('person')">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        width="15"
        height="15"
        aria-hidden="true"
        class="icon_35c1b9ef14 filter-item-icon-component noFocusStyle_e846aee9b1 st-current"
        data-testid="icon"
      >
        <path
          d="M7.51318 5.43037C8.17316 4.77038 9.06829 4.39961 10.0017 4.39961C10.935 4.39961 11.8301 4.77038 12.4901 5.43037C13.1501 6.09035 13.5209 6.98548 13.5209 7.91884C13.5209 8.8522 13.1501 9.74733 12.4901 10.4073C11.8301 11.0673 10.935 11.4381 10.0017 11.4381C9.06829 11.4381 8.17316 11.0673 7.51318 10.4073C6.8532 9.74733 6.48242 8.8522 6.48242 7.91884C6.48242 6.98548 6.8532 6.09035 7.51318 5.43037ZM10.0017 5.89961C9.46612 5.89961 8.95252 6.11235 8.57384 6.49103C8.19516 6.86971 7.98242 7.38331 7.98242 7.91884C7.98242 8.45437 8.19516 8.96797 8.57384 9.34665C8.95252 9.72533 9.46612 9.93807 10.0017 9.93807C10.5372 9.93807 11.0508 9.72533 11.4295 9.34665C11.8081 8.96797 12.0209 8.45437 12.0209 7.91884C12.0209 7.38331 11.8081 6.86971 11.4295 6.49103C11.0508 6.11235 10.5372 5.89961 10.0017 5.89961Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
        <path
          d="M10.0008 2.0498C7.89231 2.0498 5.8702 2.88739 4.37928 4.37831C2.88837 5.86922 2.05078 7.89133 2.05078 9.9998C2.05078 12.1083 2.88837 14.1304 4.37928 15.6213C4.50318 15.7452 4.63075 15.8646 4.76173 15.9794C4.77108 15.9879 4.78069 15.9963 4.79055 16.0045C6.23158 17.255 8.08036 17.9498 10.0008 17.9498C12.1093 17.9498 14.1314 17.1122 15.6223 15.6213C17.1132 14.1304 17.9508 12.1083 17.9508 9.9998C17.9508 7.89133 17.1132 5.86922 15.6223 4.37831C14.1314 2.88739 12.1093 2.0498 10.0008 2.0498ZM6.2925 15.2773C7.37119 16.0352 8.66461 16.4498 10.0008 16.4498C11.3369 16.4498 12.6302 16.0353 13.7088 15.2774C13.3315 14.8156 12.8699 14.4267 12.3466 14.1326C11.6302 13.73 10.8223 13.5186 10.0006 13.5186C9.17886 13.5186 8.37096 13.73 7.6546 14.1326C7.13136 14.4267 6.66982 14.8155 6.2925 15.2773ZM14.8283 14.2774C15.8706 13.1011 16.4508 11.5804 16.4508 9.9998C16.4508 8.28916 15.7712 6.64858 14.5616 5.43897C13.352 4.22936 11.7114 3.5498 10.0008 3.5498C8.29013 3.5498 6.64955 4.22936 5.43994 5.43897C4.23033 6.64858 3.55078 8.28916 3.55078 9.9998C3.55078 11.5803 4.13084 13.1009 5.17307 14.2772C5.66065 13.6931 6.25191 13.2003 6.91971 12.825C7.86047 12.2963 8.92145 12.0186 10.0006 12.0186C11.0797 12.0186 12.1407 12.2963 13.0815 12.825C13.7494 13.2003 14.3407 13.6932 14.8283 14.2774Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class=""
        ></path>
      </svg>
      Person
    </button>

    <button class="filter-btn" title="Filter board by anything" :class="isSelected('filter')" @click="onSelect('filter')">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        width="15"
        height="16"
        aria-hidden="true"
        class="icon_35c1b9ef14 filter-item-icon-component noFocusStyle_e846aee9b1 st-current"
        data-testid="icon"
      >
        <path
          d="M17.8571 2.87669C18.107 3.41157 18.0246 4.04275 17.6457 4.49555L12.4892 10.6589V15.3856C12.4892 16.0185 12.097 16.5852 11.5048 16.8082L9.56669 17.5381C9.09976 17.7139 8.57627 17.6494 8.16598 17.3655C7.75569 17.0816 7.51084 16.6144 7.51084 16.1155V10.6589L2.35425 4.49555C1.97542 4.04275 1.89302 3.41157 2.14291 2.87669C2.39279 2.34182 2.92977 2 3.52013 2H16.4799C17.0702 2 17.6072 2.34182 17.8571 2.87669ZM16.4799 3.52012H3.52013L8.91611 9.96964C8.99036 10.0584 9.03096 10.1698 9.03096 10.2848V16.1155L10.969 15.3856V10.2848C10.969 10.1698 11.0096 10.0584 11.0839 9.96964L16.4799 3.52012Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class=""
        ></path>
      </svg>
      Filter
    </button>

    <button class="sort-btn" title="Sort board by any column" :class="isSelected('sort')" @click="onSelect('sort')">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        width="15"
        height="15"
        aria-hidden="true"
        class="icon_35c1b9ef14 filter-item-icon-component noFocusStyle_e846aee9b1 st-current"
        data-testid="icon"
      >
        <path
          d="M7.13869 2.75741C7.34727 2.75741 7.53593 2.84277 7.67174 2.98049L10.0716 5.38342C10.3641 5.67631 10.3641 6.15118 10.0716 6.44408 9.7791 6.73697 9.30483 6.73697 9.0123 6.44408L7.88775 5.3181V17.0578C7.88775 17.472 7.55238 17.8078 7.13869 17.8078 6.725 17.8078 6.38964 17.472 6.38964 17.0578V5.31805L5.26504 6.44408C4.97252 6.73697 4.49824 6.73697 4.20572 6.44408 3.9132 6.15118 3.9132 5.67631 4.20572 5.38342L6.60901 2.97708C6.62359 2.96249 6.63871 2.94855 6.65432 2.9353 6.78492 2.82434 6.954 2.75741 7.13869 2.75741zM14.4434 17.8075C14.652 17.8075 14.8406 17.7222 14.9764 17.5844L17.3763 15.1815C17.6688 14.8886 17.6688 14.4138 17.3763 14.1209 17.0838 13.828 16.6095 13.828 16.317 14.1209L15.1924 15.2468V3.50712C15.1924 3.09291 14.8571 2.75712 14.4434 2.75712 14.0297 2.75712 13.6943 3.09291 13.6943 3.50712V15.2469L12.5697 14.1209C12.2772 13.828 11.8029 13.828 11.5104 14.1209 11.2179 14.4138 11.2179 14.8886 11.5104 15.1815L13.9137 17.5879C13.9283 17.6025 13.9434 17.6164 13.959 17.6296 14.0896 17.7406 14.2587 17.8075 14.4434 17.8075z"
          fill="currentColor"
          class=""
        ></path>
      </svg>
      Sort
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
      filterBy: {
        txt: '',     // text in searchbar
        person: '',  // person id
        filter: '', // what would this one do?
        sort: { col: '', dir: 1 },    //direction can be 1 or -1
      },
    }
  },
  methods: {
    onSelect(val) {  // handle selecting a filter type
        this.selected = val
    },
    handleOutsideClick(event) {  // handle resetting filter type
      if (!event.target.closest('.filter-section button')) {
        this.selected = ''
      }
    },
  },
  computed: {        // handle class for selected styling
    isSelected() {
        return (val) => ({ selected: this.selected === val })
    },
  },
  mounted() {     // Add global click listener
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {   // Remove global click listener
    document.removeEventListener('click', this.handleOutsideClick);
  },
}
</script>

<style scoped lang="scss">
@import "../style/setup/vars";

.filter-section {
  gap: 1rem;

  button {
    padding: 0.56rem;
    border-radius: $border-radius-xs;
    background-color: transparent;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    &:hover {
      background-color: $primary-background-hover-color;
    }

    &.selected {
      background-color: $primary-selected-color;
    }
  }

  .add-btn button {
    color: white;
    background-color: $blue-btn;
    height: 100%;

    &:first-of-type {
      border-radius: $border-radius-xs 0 0 $border-radius-xs;
    }

    &:nth-of-type(2) {
      border-radius: 0 $border-radius-xs $border-radius-xs 0;
    }

    &:hover {
      background-color: $hovered-blue-btn;
    }
  }
}
</style>