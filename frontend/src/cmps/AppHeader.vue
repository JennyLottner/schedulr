<template>
  <div class="app-header flex align-center">
    <header class="flex align-center space-between">
      <section class="logo-section flex align-center">

        <button class="nav-btn" @click="$emit('toggleNavBar')">
          <svg  viewBox="0 0 20 20"  fill="currentColor"  width="18"  height="18"  aria-hidden="true"  class="icon_f74f57d4ab"  data-testid="icon">  <g clip-path="url(#a)">    <path      d="M4.5 2.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM4.5 10A2.25 2.25 0 1 1 0 10a2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM20 10a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM4.5 17.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"    ></path>  </g>  <defs>    <clipPath id="a"><path d="M0 0h20v20H0z"></path></clipPath>  </defs></svg>
        </button>

        <RouterLink class="logo-section flex align-center" to="/">
          <img src="../assets/pics/schedulr-logo.png" alt="logo" />
          <p><span>schedulr</span> work management</p>
        </RouterLink>
      </section>

      <section class="actions-section flex align-center">

        <button title="Notifications" @click.stop="toggleHeaderModals('notifications')">
          <svg  viewBox="0 0 20 20"  fill="currentColor"  width="20"  height="20"  aria-hidden="true"  class="icon_89f9330058 noFocusStyle_54b981792c"  data-testid="icon">  <path    d="M10 2.04999C10.4143 2.04999 10.75 2.38577 10.75 2.79999V3.61058C12.0546 3.75821 13.2785 4.34336 14.2159 5.28079C15.309 6.37389 15.9231 7.85644 15.9231 9.4023C15.9231 11.7406 16.1727 13.0548 16.3959 13.758C16.5068 14.1075 16.6088 14.2984 16.6645 14.3868C16.6835 14.4168 16.697 14.435 16.7038 14.4435C16.9179 14.6455 16.9953 14.9565 16.8964 15.2377C16.7908 15.538 16.5072 15.7389 16.1889 15.7389H12.9529C12.9516 15.8038 12.9418 15.8695 12.9226 15.9348C12.7439 16.5449 12.3725 17.0809 11.864 17.4623C11.3554 17.8437 10.7371 18.05 10.1015 18.05C9.46584 18.05 8.84746 17.8437 8.33891 17.4623C7.83037 17.0809 7.45905 16.5449 7.28027 15.9348C7.26115 15.8695 7.2513 15.8038 7.24997 15.7389H4.00001C3.71313 15.7389 3.45138 15.5752 3.32575 15.3173C3.20248 15.0643 3.23145 14.764 3.39963 14.5394C3.40133 14.5369 3.40486 14.5316 3.41004 14.5235C3.42459 14.5005 3.45231 14.4542 3.48918 14.3812C3.56285 14.2352 3.67358 13.9813 3.78854 13.5917C4.01863 12.812 4.26574 11.4886 4.26574 9.4023C4.26574 7.85644 4.87984 6.37389 5.97293 5.28079C6.865 4.38872 8.01646 3.81567 9.25004 3.63507V2.79999C9.25004 2.38577 9.58582 2.04999 10 2.04999ZM8.80705 15.7389C8.90698 15.9443 9.05465 16.1241 9.2389 16.2623C9.488 16.4491 9.79062 16.55 10.1015 16.55C10.4123 16.55 10.7149 16.4491 10.964 16.2623C11.1483 16.1241 11.2959 15.9443 11.3959 15.7389H8.80705ZM7.03359 6.34145C7.84538 5.52967 8.9464 5.07361 10.0944 5.07361C11.2425 5.07361 12.3435 5.52967 13.1553 6.34145C13.9671 7.15324 14.4231 8.25426 14.4231 9.4023C14.4231 11.8353 14.6814 13.3144 14.9661 14.2117L14.9748 14.2389H5.15815C5.18119 14.1682 5.20426 14.0941 5.22721 14.0163C5.50499 13.075 5.76574 11.6052 5.76574 9.4023C5.76574 8.25426 6.2218 7.15324 7.03359 6.34145Z"    fill="currentColor"    fill-rule="evenodd"    clip-rule="evenodd"  ></path></svg>
        </button>

        <button title="Update feed" @click.stop="toggleHeaderModals('feed')">
          <svg  viewBox="0 0 20 20"  fill="currentColor"  width="20"  height="20"  aria-hidden="true"  class="icon_89f9330058 noFocusStyle_54b981792c"  data-testid="icon">  <path    d="M1.91632 11.0669C1.91632 10.6527 2.25211 10.3169 2.66632 10.3169H7.44893C7.86314 10.3169 8.19893 10.6527 8.19893 11.0669V11.6764C8.19893 11.9011 8.40478 12.1455 8.72429 12.1455H11.5939C11.9134 12.1455 12.1192 11.9011 12.1192 11.6764V11.0669C12.1192 10.6527 12.455 10.3169 12.8692 10.3169H17.333C17.7472 10.3169 18.083 10.6527 18.083 11.0669V13.3336C18.083 14.8523 16.8518 16.0836 15.333 16.0836H4.66632C3.14754 16.0836 1.91632 14.8523 1.91632 13.3336V11.0669ZM3.41632 11.8169V13.3336C3.41632 14.0239 3.97597 14.5836 4.66632 14.5836H15.333C16.0233 14.5836 16.583 14.0239 16.583 13.3336V11.8169H13.6142C13.5391 12.8634 12.6313 13.6455 11.5939 13.6455H8.72429C7.68683 13.6455 6.77904 12.8634 6.70395 11.8169H3.41632Z"    fill="currentColor"    fill-rule="evenodd"    clip-rule="evenodd"  ></path>  <path    d="M5.84564 5.41675C5.59751 5.41675 5.37654 5.57371 5.29484 5.808L3.37482 11.3137C3.23843 11.7048 2.8108 11.9113 2.41968 11.7749C2.02857 11.6385 1.82208 11.2109 1.95847 10.8198L3.87849 5.31407C4.17029 4.47733 4.95947 3.91675 5.84564 3.91675H14.1543C15.0405 3.91675 15.8297 4.47733 16.1215 5.31407L18.0415 10.8198C18.1779 11.2109 17.9714 11.6385 17.5803 11.7749C17.1892 11.9113 16.7615 11.7048 16.6251 11.3137L14.7051 5.808C14.6234 5.57371 14.4024 5.41675 14.1543 5.41675H5.84564Z"    fill="currentColor"    fill-rule="evenodd"    clip-rule="evenodd"  ></path></svg>
        </button>

        <button title="contact us">
          <RouterLink to="/about">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><g><rect width="20" height="20" opacity="0"/>  <path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2zM17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z"/></g></svg>
          </RouterLink>
        </button>
        
        <div class="divider"></div>
        
        <button title="Search everything" @click.stop="toggleHeaderModals('search')">
          <svg  viewBox="0 0 20 20"  fill="currentColor"  width="20"  height="20"  aria-hidden="true"  class="icon_89f9330058 noFocusStyle_54b981792c"  data-testid="icon">  <path    d="M8.65191 2.37299C6.9706 2.37299 5.35814 3.04089 4.16927 4.22976C2.9804 5.41863 2.3125 7.03108 2.3125 8.7124C2.3125 10.3937 2.9804 12.0062 4.16927 13.195C5.35814 14.3839 6.9706 15.0518 8.65191 15.0518C10.0813 15.0518 11.4609 14.5691 12.5728 13.6939L16.4086 17.5303C16.7014 17.8232 17.1763 17.8232 17.4692 17.5303C17.7621 17.2375 17.7622 16.7626 17.4693 16.4697L13.6334 12.6333C14.5086 11.5214 14.9913 10.1418 14.9913 8.7124C14.9913 7.03108 14.3234 5.41863 13.1346 4.22976C11.9457 3.04089 10.3332 2.37299 8.65191 2.37299ZM12.091 12.1172C12.9878 11.2113 13.4913 9.98783 13.4913 8.7124C13.4913 7.42891 12.9815 6.19798 12.0739 5.29042C11.1663 4.38285 9.9354 3.87299 8.65191 3.87299C7.36842 3.87299 6.1375 4.38285 5.22993 5.29042C4.32237 6.19798 3.8125 7.42891 3.8125 8.7124C3.8125 9.99589 4.32237 11.2268 5.22993 12.1344C6.1375 13.0419 7.36842 13.5518 8.65191 13.5518C9.92736 13.5518 11.1509 13.0483 12.0568 12.1514C12.0623 12.1455 12.0679 12.1397 12.0737 12.134C12.0794 12.1283 12.0851 12.1227 12.091 12.1172Z"    fill="currentColor"    fill-rule="evenodd"    clip-rule="evenodd"  ></path></svg>
        </button>
        
        <button title="About">
          <RouterLink to="/about">
            <svg height="18" width="18" fill="currentcolor" version="1.1" viewBox="0 0 512 512"><g>	<path d="M290.671,135.434c37.324-3.263,64.949-36.175,61.663-73.498c-3.241-37.324-36.152-64.938-73.476-61.675   c-37.324,3.264-64.949,36.164-61.686,73.488C220.437,111.096,253.348,138.698,290.671,135.434z"/><path d="M311.31,406.354c-16.134,5.906-43.322,22.546-43.322,22.546s20.615-95.297,21.466-99.446   c8.71-41.829,33.463-100.86-0.069-136.747c-23.35-24.936-53.366-18.225-79.819,7.079c-17.467,16.696-26.729,27.372-42.908,45.322   c-6.55,7.273-9.032,14.065-5.93,24.717c3.332,11.515,16.8,17.226,28.705,12.871c16.134-5.895,43.3-22.534,43.3-22.534   s-12.595,57.997-18.869,87c-0.874,4.137-36.06,113.292-2.505,149.18c23.35,24.949,53.343,18.226,79.819-7.066   c17.467-16.698,26.729-27.373,42.908-45.334c6.55-7.263,9.009-14.054,5.93-24.706C336.66,407.733,323.215,402.01,311.31,406.354z"/></g></svg>
          </RouterLink>
        </button>

        <button class="user-btn" @click.stop="toggleHeaderModals('user')">
          <img class="logo" src="../assets/pics/schedulr-logo.png" alt="logo" />

          <div class="user-img">
            <img v-if="user" :src="user.imgUrl" alt="user's profile image" />
            <svg  v-else     version="1.1"  width="256"  height="256"  viewBox="0 0 256 256"  xml:space="preserve">  <defs></defs>  <g    style="      stroke: none;      stroke-width: 0;      stroke-dasharray: none;      stroke-linecap: butt;      stroke-linejoin: miter;      stroke-miterlimit: 10;      fill: none;      fill-rule: nonzero;      opacity: 1;    "    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"  >    <path      d="M 45 88 c -11.049 0 -21.18 -2.003 -29.021 -8.634 C 6.212 71.105 0 58.764 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 c 0 13.765 -6.212 26.105 -15.979 34.366 C 66.181 85.998 56.049 88 45 88 z"      style="        stroke: none;        stroke-width: 1;        stroke-dasharray: none;        stroke-linecap: butt;        stroke-linejoin: miter;        stroke-miterlimit: 10;        fill: rgb(214, 214, 214);        fill-rule: nonzero;        opacity: 1;      "      transform=" matrix(1 0 0 1 0 0) "      stroke-linecap="round"    />    <path      d="M 45 60.71 c -11.479 0 -20.818 -9.339 -20.818 -20.817 c 0 -11.479 9.339 -20.818 20.818 -20.818 c 11.479 0 20.817 9.339 20.817 20.818 C 65.817 51.371 56.479 60.71 45 60.71 z"      style="        stroke: none;        stroke-width: 1;        stroke-dasharray: none;        stroke-linecap: butt;        stroke-linejoin: miter;        stroke-miterlimit: 10;        fill: rgb(165, 164, 164);        fill-rule: nonzero;        opacity: 1;      "      transform=" matrix(1 0 0 1 0 0) "      stroke-linecap="round"    />    <path      d="M 45 90 c -10.613 0 -20.922 -3.773 -29.028 -10.625 c -0.648 -0.548 -0.88 -1.444 -0.579 -2.237 C 20.034 64.919 31.933 56.71 45 56.71 s 24.966 8.209 29.607 20.428 c 0.301 0.793 0.069 1.689 -0.579 2.237 C 65.922 86.227 55.613 90 45 90 z"      style="        stroke: none;        stroke-width: 1;        stroke-dasharray: none;        stroke-linecap: butt;        stroke-linejoin: miter;        stroke-miterlimit: 10;        fill: rgb(165, 164, 164);        fill-rule: nonzero;        opacity: 1;      "      transform=" matrix(1 0 0 1 0 0) "      stroke-linecap="round"    />  </g></svg>
          </div>
        </button>

      </section>
    </header>

    <HeaderModals :openedModal="openedModal" @toggle-header-modals="toggleHeaderModals"/>
  </div>
</template>

<script>
import HeaderModals from './HeaderModals.vue'

export default {
  data() { return {
    openedModal: '',
  }},
  methods: {
    toggleHeaderModals(modalType = '') {
      if (this.openedModal === modalType) this.openedModal = ''
      else this.openedModal = modalType
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
  components: {
    HeaderModals,
  },
}
</script>

<style lang="scss">
@import "../style/setup/mixins";
@import "../style/setup/vars";

.app-header {
  width: 100vw;
  padding-inline: 0.75rem;
  background-color: transparent;

  header {
    width: 100%;
  }

  button {
    @include headerBtn;
  }

  .logo-section {
    gap: 0.25rem;

    img {
      max-width: 1rem;
      max-height: 1.5rem;
    }

    p {
      display: none;
      font-weight: lighter;

      span {
        font-weight: bold;
      }
    }

    .nav-btn {
      padding: 0.625rem;
      margin-inline-end: 0.25rem;
    }
  }

  .actions-section {
    gap: 0.2rem;

    .divider {
      background-color: $app-gray;
      width: 0.25px;
      padding-block: 0.7rem;
    }
  }

  .user-btn {
    height: 2rem;
    width: 3.5rem;
    border-radius: $border-radius-xs;
    background-color: $nav-background;
    margin-inline: 0.25rem 0.8rem;
    padding-inline-start: 1rem;

    .logo {
      max-width: 1rem;
      max-height: 1.2rem;
    }

    .user-img {
      width: 2rem;
      height: 2rem;
      transform: translateX(7px) translateY(1px);
      border-radius: 50%;
      background-color: $primary-selected-color;
      
      svg,
      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      img {
        object-fit: cover;
      }
    }
  }
}

@media (width > 600px) {
  .app-header {
    padding-inline: 1.5rem;

    .logo-section {
      gap: 0.5rem;

      p {
        display: inline;
      }

      .nav-btn {
        display: none;
      }
    }

    .actions-section {
      gap: 0.4rem;
    }
  }
}
</style>