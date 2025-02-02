<template>
  <article class="board-card flex column">
    <img src="../assets/pics/home_recent_board.svg" alt="img of board" />
    <div class="card-title grid align-center">
      <svg
        viewBox="0 0 20 20"
        fill="$svg-color"
        width="22"
        height="22"
        aria-hidden="true"
        class="icon_35c1b9ef14"
        data-testid="icon"
      >
        <path
          d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
      <h2>{{ boardName }}</h2>
      <button class="fav-btn flex center" title="Add to favorites">
        <!-- add if favorites and if not favorites-->
        <svg
          width="20"
          height="20"
          viewBox="-0.5 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.71 3.45001L15.17 7.94C15.2272 8.04557 15.307 8.1371 15.4039 8.20801C15.5007 8.27892 15.6121 8.3274 15.73 8.34998L20.73 9.29999C20.8726 9.327 21.0053 9.39183 21.1142 9.48767C21.2232 9.58352 21.3044 9.70688 21.3494 9.84485C21.3943 9.98282 21.4014 10.1303 21.3698 10.272C21.3383 10.4136 21.2693 10.5442 21.17 10.65L17.66 14.38C17.5784 14.4676 17.5172 14.5723 17.4809 14.6864C17.4446 14.8005 17.4341 14.9213 17.45 15.04L18.09 20.12C18.1098 20.2633 18.0903 20.4094 18.0337 20.5425C17.9771 20.6757 17.8854 20.791 17.7684 20.8762C17.6514 20.9613 17.5135 21.0132 17.3694 21.0262C17.2253 21.0392 17.0804 21.0129 16.95 20.95L12.32 18.77C12.2114 18.7155 12.0915 18.6871 11.97 18.6871C11.8485 18.6871 11.7286 18.7155 11.62 18.77L6.99 20.95C6.85904 21.0119 6.71392 21.0375 6.56971 21.0242C6.4255 21.0109 6.28751 20.9591 6.17008 20.8744C6.05265 20.7896 5.96006 20.6749 5.90201 20.5422C5.84396 20.4096 5.82256 20.2638 5.84 20.12L6.49 15.04C6.50596 14.9213 6.49542 14.8005 6.45911 14.6864C6.4228 14.5723 6.36162 14.4676 6.28 14.38L2.76999 10.65C2.67072 10.5442 2.60172 10.4136 2.57017 10.272C2.53861 10.1303 2.54568 9.98282 2.59064 9.84485C2.63561 9.70688 2.71683 9.58352 2.82578 9.48767C2.93473 9.39183 3.06742 9.327 3.21 9.29999L8.21 8.34998C8.32789 8.3274 8.43929 8.27892 8.53614 8.20801C8.63299 8.1371 8.71286 8.04557 8.76999 7.94L11.28 3.45001C11.349 3.32033 11.4521 3.21187 11.578 3.13623C11.704 3.0606 11.8481 3.02063 11.995 3.02063C12.1419 3.02063 12.2861 3.0606 12.412 3.13623C12.538 3.21187 12.641 3.32033 12.71 3.45001V3.45001Z"
            stroke="#68697a"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <div class="path-to-board flex align-center">
      <svg
        class="product-svg-icon st-current"
        width="14"
        height="14"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1150_158978)">
          <path
            d="M20.3812 4.62863C20.3812 2.47439 18.6357 0.728027 16.4826 0.728027C14.3294 0.728027 12.584 2.47439 12.584 4.62863V8.91568C12.584 11.0699 14.3294 12.8163 16.4826 12.8163C18.6357 12.8163 20.3812 11.0699 20.3812 8.91568V4.62863Z"
            fill="url(#paint0_linear_1150_158978)"
            class=""
          ></path>
          <path
            d="M5.11916 10.0994C3.07035 9.43366 0.870087 10.554 0.204732 12.6018C-0.460623 14.6495 0.660888 16.8492 2.7097 17.5149L6.78692 18.8397C8.83573 19.5054 11.036 18.385 11.7013 16.3373C12.3667 14.2895 11.2452 12.0898 9.19638 11.4241L5.11916 10.0994Z"
            fill="url(#paint1_linear_1150_158978)"
            class=""
          ></path>
          <path
            d="M5.59794 26.3042C4.33171 28.0471 4.71733 30.4859 6.45925 31.7514C8.20117 33.017 10.6398 32.6301 11.906 30.8873L14.4259 27.419C15.6921 25.6762 15.3065 23.2374 13.5646 21.9718C11.8226 20.7062 9.38404 21.0931 8.1178 22.8359L5.59794 26.3042Z"
            fill="url(#paint2_linear_1150_158978)"
          ></path>
          <path
            d="M21.1629 30.8429C22.4291 32.5858 24.8677 32.9726 26.6096 31.7071C28.3516 30.4415 28.7372 28.0027 27.471 26.2599L24.9511 22.7916C23.6849 21.0488 21.2463 20.6619 19.5043 21.9275C17.7624 23.193 17.3768 25.6318 18.643 27.3747L21.1629 30.8429Z"
            fill="url(#paint3_linear_1150_158978)"
            class=""
          ></path>
          <path
            d="M16.5188 21.7056C18.6553 21.7056 20.3872 19.9736 20.3872 17.8372C20.3872 15.7007 18.6553 13.9688 16.5188 13.9688C14.3823 13.9688 12.6504 15.7007 12.6504 17.8372C12.6504 19.9736 14.3823 21.7056 16.5188 21.7056Z"
            fill="#6161FF"
            class=""
          ></path>
          <path
            d="M3.89332 17.6821C6.04138 17.6821 7.78273 15.9408 7.78273 13.7927C7.78273 11.6447 6.04138 9.90332 3.89332 9.90332C1.74526 9.90332 0.00390625 11.6447 0.00390625 13.7927C0.00390625 15.9408 1.74526 17.6821 3.89332 17.6821Z"
            fill="#6161FF"
          ></path>
          <path
            d="M16.4803 8.49289C18.6322 8.49289 20.3767 6.74844 20.3767 4.59654C20.3767 2.44465 18.6322 0.700195 16.4803 0.700195C14.3284 0.700195 12.584 2.44465 12.584 4.59654C12.584 6.74844 14.3284 8.49289 16.4803 8.49289Z"
            fill="#6161FF"
            class=""
          ></path>
          <path
            d="M8.75854 32.5044C10.9141 32.5044 12.6616 30.7569 12.6616 28.6013C12.6616 26.4457 10.9141 24.6982 8.75854 24.6982C6.60293 24.6982 4.85547 26.4457 4.85547 28.6013C4.85547 30.7569 6.60293 32.5044 8.75854 32.5044Z"
            fill="#6161FF"
          ></path>
          <path
            d="M24.3244 32.4656C26.4753 32.4656 28.2191 30.7219 28.2191 28.571C28.2191 26.42 26.4753 24.6763 24.3244 24.6763C22.1734 24.6763 20.4297 26.42 20.4297 28.571C20.4297 30.7219 22.1734 32.4656 24.3244 32.4656Z"
            fill="#6161FF"
          ></path>
          <path
            d="M27.8808 10.0984C29.9296 9.43268 32.1299 10.5531 32.7953 12.6008C33.4606 14.6486 32.3391 16.8482 30.2903 17.5139L26.2131 18.8387C24.1643 19.5044 21.964 18.384 21.2987 16.3363C20.6333 14.2885 21.7548 12.0888 23.8036 11.4231L27.8808 10.0984Z"
            fill="url(#paint4_linear_1150_158978)"
            class=""
          ></path>
          <path
            d="M29.1028 17.6807C26.9547 17.6807 25.2134 15.9393 25.2134 13.7913C25.2134 11.6432 26.9547 9.90186 29.1028 9.90186C31.2508 9.90186 32.9922 11.6432 32.9922 13.7913C32.9922 15.9393 31.2508 17.6807 29.1028 17.6807Z"
            fill="#6161FF"
            class=""
          ></path>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1150_158978"
            x1="16.4571"
            y1="-6.76339"
            x2="16.5428"
            y2="13.5953"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.411458"
              stop-color="#6C6CFF"
              stop-opacity="0.9"
            ></stop>
            <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_1150_158978"
            x1="-6.92791"
            y1="10.3111"
            x2="12.4608"
            y2="16.5207"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.411458"
              stop-color="#6C6CFF"
              stop-opacity="0.9"
            ></stop>
            <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear_1150_158978"
            x1="2.07655"
            y1="37.8271"
            x2="13.9737"
            y2="21.3062"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.411458"
              stop-color="#6C6CFF"
              stop-opacity="0.9"
            ></stop>
            <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
          </linearGradient>
          <linearGradient
            id="paint3_linear_1150_158978"
            x1="31.0336"
            y1="37.7528"
            x2="18.9977"
            y2="21.3327"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.411458"
              stop-color="#6C6CFF"
              stop-opacity="0.9"
            ></stop>
            <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
          </linearGradient>
          <linearGradient
            id="paint4_linear_1150_158978"
            x1="39.9279"
            y1="10.3101"
            x2="20.5392"
            y2="16.5197"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.411458"
              stop-color="#6C6CFF"
              stop-opacity="0.9"
            ></stop>
            <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
          </linearGradient>
        </defs>
      </svg>
      <p>work management > Main workspace</p>
    </div>
  </article>
</template>

<script>
export default {
  props: ['boardName'],
}
</script>

<style scoped lang="scss">
@import "../style/setup/vars";

.board-card {
  height: 14rem;
  padding: 0.5rem 0.5rem 0.75rem;
  border: $app-gray 1px solid;
  border-radius: $border-radius-xs;

  &:hover {
    border: none;
    box-shadow: rgba(0, 0, 0, 0.2) 0 6px 20px 0;
  }

  img {
    object-fit: cover;
    min-height: 6.375rem;
    border-radius: $border-radius-xs;
    margin-block-end: 0.5rem;
  }
  
  .card-title {
    margin-block-end: 0.25rem;
    padding-inline-end: 0.25rem;

    grid-template-columns: 1.375rem 1fr 2rem;
    gap: 0.5rem;

    svg {
      color: $svg-color;
    }

    h2 {
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .fav-btn {
      height: 2rem;
      width: 2rem;
      border-radius: $border-radius-xs;
      background-color: transparent;

      &:hover {
        background-color: $primary-background-hover-color;
      }
    }
  }

  .path-to-board {
    gap: 0.5rem;

    p {
      font-size: 0.875rem;
      color: $primary-background-color;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg {
      width: 1.1rem;
      height: 1.1rem;
    }
  }
}
</style>