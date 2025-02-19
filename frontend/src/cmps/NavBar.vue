<template>
  <nav class="flex column">
    <RouterLink
      to="/"
      :class="isSelected('/')"
      class="tab-container flex align-center">
      <svg  viewBox="0 0 20 20"  fill="currentColor"  width="18"  height="18"  aria-hidden="true"  class="icon_90dcd5fe7a egsFo"  data-testid="icon">  <path    d="M9.56992 2.1408C9.82591 1.95307 10.1741 1.95307 10.4301 2.1408L17.7028 7.47413C17.8896 7.61113 18 7.82894 18 8.06061V16.7879C18 17.1895 17.6744 17.5152 17.2727 17.5152H11.9394C11.5377 17.5152 11.2121 17.1895 11.2121 16.7879V13.1515H8.78788V16.7879C8.78788 17.1895 8.46227 17.5152 8.06061 17.5152H2.72727C2.32561 17.5152 2 17.1895 2 16.7879V8.06061C2 7.82894 2.11037 7.61113 2.29719 7.47413L9.56992 2.1408ZM3.45455 8.42914V16.0606H7.33333V12.4242C7.33333 12.0226 7.65894 11.697 8.06061 11.697H11.9394C12.3411 11.697 12.6667 12.0226 12.6667 12.4242V16.0606H16.5455V8.42914L10 3.62914L3.45455 8.42914Z"    fill="currentColor"    fill-rule="evenodd"    clip-rule="evenodd"  ></path></svg>
      <p>Home</p>
    </RouterLink>

    <RouterLink
      to="/my_work"
      :class="isSelected('/my_work')"
      class="tab-container flex align-center">
      <svg  viewBox="0 0 20 20"  fill="currentColor"  width="18"  height="18"  aria-hidden="true"  tabindex="-1"  class="icon_a812034417 st-current"  data-testid="icon">  <path    d="M5.99986 1.82129C6.41407 1.82129 6.74986 2.15708 6.74986 2.57129V4.10701H13.2499V2.57129C13.2499 2.15708 13.5856 1.82129 13.9999 1.82129C14.4141 1.82129 14.7499 2.15708 14.7499 2.57129V4.107H16.2856C16.7876 4.107 17.269 4.30643 17.624 4.66141C17.979 5.01639 18.1784 5.49784 18.1784 5.99986V16.2856C18.1784 16.7876 17.979 17.269 17.624 17.624C17.269 17.979 16.7876 18.1784 16.2856 18.1784H3.71415C3.21213 18.1784 2.73067 17.979 2.37569 17.624C2.02071 17.269 1.82129 16.7876 1.82129 16.2856V5.99986C1.82129 5.49784 2.02071 5.01639 2.37569 4.66141C2.73067 4.30643 3.21213 4.107 3.71415 4.107C3.763 4.107 3.81077 4.11168 3.85702 4.1206C3.90326 4.11168 3.95102 4.10701 3.99986 4.10701H5.24986V2.57129C5.24986 2.15708 5.58565 1.82129 5.99986 1.82129ZM5.24986 7.14272V5.60701H3.99986C3.95101 5.60701 3.90324 5.60234 3.85699 5.59342C3.81075 5.60233 3.76299 5.607 3.71415 5.607C3.60995 5.607 3.51003 5.64839 3.43635 5.72207C3.36268 5.79574 3.32129 5.89567 3.32129 5.99986V16.2856C3.32129 16.3898 3.36268 16.4897 3.43635 16.5634C3.51003 16.637 3.60995 16.6784 3.71415 16.6784H16.2856C16.3898 16.6784 16.4897 16.637 16.5634 16.5634C16.637 16.4897 16.6784 16.3898 16.6784 16.2856V5.99986C16.6784 5.89567 16.637 5.79574 16.5634 5.72207C16.4897 5.64839 16.3898 5.607 16.2856 5.607H14.7499V7.14272C14.7499 7.55693 14.4141 7.89272 13.9999 7.89272C13.5856 7.89272 13.2499 7.55693 13.2499 7.14272V5.60701H6.74986V7.14272C6.74986 7.55693 6.41407 7.89272 5.99986 7.89272C5.58565 7.89272 5.24986 7.55693 5.24986 7.14272ZM13.4214 9.92231C13.6942 9.61058 13.6626 9.13676 13.3509 8.864C13.0392 8.59124 12.5653 8.62283 12.2926 8.93455L8.75058 12.9825L7.02129 11.6856C6.68992 11.437 6.21982 11.5042 5.97129 11.8356C5.72276 12.1669 5.78992 12.637 6.12129 12.8856L8.407 14.5999C8.72086 14.8353 9.16309 14.789 9.42144 14.4937L13.4214 9.92231Z"    fill="currentColor"    fill-rule="evenodd"    clip-rule="evenodd"    class=""  ></path></svg>
      <p>My work</p>
    </RouterLink>

    <div class="divider"></div>

    <button class="favorites-title tab-container flex align-center" @click="onFav()">
      <span>
        <svg  v-if="!onFavorites"  width="18"  height="18"  viewBox="-0.5 0 25 25"  fill="none"  xmlns="http://www.w3.org/2000/svg">  <path    d="M12.71 3.45001L15.17 7.94C15.2272 8.04557 15.307 8.1371 15.4039 8.20801C15.5007 8.27892 15.6121 8.3274 15.73 8.34998L20.73 9.29999C20.8726 9.327 21.0053 9.39183 21.1142 9.48767C21.2232 9.58352 21.3044 9.70688 21.3494 9.84485C21.3943 9.98282 21.4014 10.1303 21.3698 10.272C21.3383 10.4136 21.2693 10.5442 21.17 10.65L17.66 14.38C17.5784 14.4676 17.5172 14.5723 17.4809 14.6864C17.4446 14.8005 17.4341 14.9213 17.45 15.04L18.09 20.12C18.1098 20.2633 18.0903 20.4094 18.0337 20.5425C17.9771 20.6757 17.8854 20.791 17.7684 20.8762C17.6514 20.9613 17.5135 21.0132 17.3694 21.0262C17.2253 21.0392 17.0804 21.0129 16.95 20.95L12.32 18.77C12.2114 18.7155 12.0915 18.6871 11.97 18.6871C11.8485 18.6871 11.7286 18.7155 11.62 18.77L6.99 20.95C6.85904 21.0119 6.71392 21.0375 6.56971 21.0242C6.4255 21.0109 6.28751 20.9591 6.17008 20.8744C6.05265 20.7896 5.96006 20.6749 5.90201 20.5422C5.84396 20.4096 5.82256 20.2638 5.84 20.12L6.49 15.04C6.50596 14.9213 6.49542 14.8005 6.45911 14.6864C6.4228 14.5723 6.36162 14.4676 6.28 14.38L2.76999 10.65C2.67072 10.5442 2.60172 10.4136 2.57017 10.272C2.53861 10.1303 2.54568 9.98282 2.59064 9.84485C2.63561 9.70688 2.71683 9.58352 2.82578 9.48767C2.93473 9.39183 3.06742 9.327 3.21 9.29999L8.21 8.34998C8.32789 8.3274 8.43929 8.27892 8.53614 8.20801C8.63299 8.1371 8.71286 8.04557 8.76999 7.94L11.28 3.45001C11.349 3.32033 11.4521 3.21187 11.578 3.13623C11.704 3.0606 11.8481 3.02063 11.995 3.02063C12.1419 3.02063 12.2861 3.0606 12.412 3.13623C12.538 3.21187 12.641 3.32033 12.71 3.45001V3.45001Z"    stroke="#000000"    stroke-width="1.5"    stroke-linecap="round"    stroke-linejoin="round"  /></svg>
        <svg  v-else  width="17"  height="16"  viewBox="0 0 17 16"  fill="none"  xmlns="http://www.w3.org/2000/svg">  <path    d="M9.38651 0.919639L8.72889 1.24523L9.38698 0.920593L11.129 4.45187L15.0309 5.02032C15.2789 5.05775 15.5116 5.16372 15.7026 5.32629C15.8937 5.48886 16.0355 5.70156 16.1121 5.94041C16.1888 6.17927 16.1972 6.43478 16.1364 6.67816C16.0757 6.92112 15.9484 7.14233 15.769 7.31695L15.768 7.31784L12.9482 10.0673L13.6135 13.9517L13.6138 13.9535C13.6571 14.2021 13.6297 14.4578 13.5347 14.6916C13.4394 14.9259 13.2801 15.1287 13.0749 15.2767C12.8698 15.4246 12.6271 15.5118 12.3747 15.5283C12.1238 15.5446 11.8735 15.4904 11.6519 15.3718L8.17876 13.5456L4.69674 15.3773C4.47515 15.4959 4.22475 15.5502 3.97387 15.5338C3.72146 15.5174 3.47877 15.4302 3.27362 15.2823C3.06847 15.1343 2.90914 14.9315 2.81388 14.6972C2.71885 14.4634 2.69143 14.2076 2.73473 13.959L2.73504 13.9573L3.4004 10.0728L0.58498 7.32119L0.58397 7.32021C0.404543 7.1456 0.277339 6.92443 0.216658 6.68151C0.155863 6.43814 0.164258 6.18262 0.240897 5.94377C0.317535 5.70491 0.45937 5.49221 0.650413 5.32964C0.841455 5.16707 1.07411 5.0611 1.32215 5.02367L1.32538 5.02319L5.22851 4.45192L6.97099 0.919639C7.08244 0.694536 7.25457 0.505061 7.46798 0.37259C7.68139 0.240118 7.92757 0.169922 8.17875 0.169922C8.42993 0.169922 8.67611 0.240118 8.88952 0.37259C9.10292 0.505061 9.27506 0.694536 9.38651 0.919639Z"    fill="#FFCB00"  ></path></svg>
      </span>
      <p>Favorites</p>
    </button>

    <section v-if="onFavorites" class="workplaces flex column">
      <ul class="boards flex column">
        <li class="tab-container flex align-center">
          <RouterLink to="/board" :class="isSelected('/board')" @contextmenu.prevent="openCloseOptions('1')"
            class="flex align-center">
            <svg  viewBox="0 0 20 20"  fill="currentColor"  width="18"  height="18"  aria-hidden="true"  class="icon_35c1b9ef14"  data-testid="icon">  <path    d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z"    fill="currentColor"    fill-rule="evenodd"    clip-rule="evenodd"  ></path></svg>
            <p>Sample board</p>
  
            <button class="options-btn" @click.prevent="openCloseOptions('1')">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="13" height="13" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><g transform="translate(0,590) scale(0.1,-0.1)" fill="#000000" stroke="none"><path d="M764 2975 c-82 -18 -137 -47 -201 -107 -90 -86 -133 -185 -133 -308 0 -124 43 -222 135 -309 168 -159 422 -155 588 10 168 168 168 430 0 598 -65 64 -139 104 -227 120 -72 13 -84 13 -162 -4z"/><path d="M2487 2980 c-222 -39 -383 -262 -348 -481 38 -233 257 -396 482 -360 282 46 442 341 324 598 -79 174 -271 276 -458 243z"/><path d="M4180 2976 c-84 -18 -149 -54 -213 -117 -129 -129 -161 -314 -83 -484 32 -71 124 -163 197 -198 162 -76 345 -48 474 74 92 87 135 185 135 309 0 123 -43 222 -133 308 -65 61 -119 89 -206 108 -78 16 -98 16 -171 0z"/></g></svg>
            </button>
          </RouterLink>
          
          <OptionsModal v-if="isOpened('1')" :boardId="'0123'"/>
        </li>

        <li class="tab-container flex align-center">
          <RouterLink to="/board" :class="isSelected('/board/id')" @contextmenu.prevent="openCloseOptions('2')"
            class="flex align-center">
            <svg  viewBox="0 0 20 20"  fill="currentColor"  width="18"  height="18"  aria-hidden="true"  class="icon_35c1b9ef14"  data-testid="icon">  <path    d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z"    fill="currentColor"    fill-rule="evenodd"    clip-rule="evenodd"    ></path>  </svg>
            <p>[where all boards show up in list. adding more for overflow]</p>
  
            <button class="options-btn" @click.prevent="openCloseOptions('2')">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="13" height="13" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><g transform="translate(0,590) scale(0.1,-0.1)" fill="#000000" stroke="none"><path d="M764 2975 c-82 -18 -137 -47 -201 -107 -90 -86 -133 -185 -133 -308 0 -124 43 -222 135 -309 168 -159 422 -155 588 10 168 168 168 430 0 598 -65 64 -139 104 -227 120 -72 13 -84 13 -162 -4z"/><path d="M2487 2980 c-222 -39 -383 -262 -348 -481 38 -233 257 -396 482 -360 282 46 442 341 324 598 -79 174 -271 276 -458 243z"/><path d="M4180 2976 c-84 -18 -149 -54 -213 -117 -129 -129 -161 -314 -83 -484 32 -71 124 -163 197 -198 162 -76 345 -48 474 74 92 87 135 185 135 309 0 123 -43 222 -133 308 -65 61 -119 89 -206 108 -78 16 -98 16 -171 0z"/></g></svg>
            </button>
          </RouterLink>
          
          <OptionsModal v-if="isOpened('2')" :boardId="'0123'"/>
        </li>
      </ul>

      <section class="empty-favorites">
        <!-- Add if statement for if user.favorites is empty -->
        <img src="https://microfrontends.monday.com/mf-leftpane/latest/static/media/favorites-empty-.99fa5473.svg" alt="No favorite items image"/>
        <h2>Your favorites are empty</h2>
        <p>Add your boards for a quick access.</p>
      </section>
    </section>

    <section v-else class="workplaces flex column">
      <div class="divider"></div>

      <div class="workspace-title tab-container flex align-center">
        <svg  viewBox="0 0 20 20"  fill="currentColor"  width="18"  height="18"  aria-hidden="true"  tabindex="-1"  class="icon_a812034417"  data-testid="icon">  <path    d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V8.38462C2.25 8.79883 2.58579 9.13462 3 9.13462H8.38462C8.79883 9.13462 9.13462 8.79883 9.13462 8.38462V3C9.13462 2.58579 8.79883 2.25 8.38462 2.25H3ZM3.75 7.63462V3.75H7.63462V7.63462H3.75ZM11.6154 2.25C11.2012 2.25 10.8654 2.58579 10.8654 3V8.38462C10.8654 8.79883 11.2012 9.13462 11.6154 9.13462H17C17.4142 9.13462 17.75 8.79883 17.75 8.38462V3C17.75 2.58579 17.4142 2.25 17 2.25H11.6154ZM12.3654 7.63462V3.75H16.25V7.63462H12.3654ZM2.25 11.6154C2.25 11.2012 2.58579 10.8654 3 10.8654H8.38462C8.79883 10.8654 9.13462 11.2012 9.13462 11.6154V17C9.13462 17.4142 8.79883 17.75 8.38462 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17V11.6154ZM3.75 12.3654V16.25H7.63462V12.3654H3.75ZM11.6154 10.8654C11.2012 10.8654 10.8654 11.2012 10.8654 11.6154V17C10.8654 17.4142 11.2012 17.75 11.6154 17.75H17C17.4142 17.75 17.75 17.4142 17.75 17V11.6154C17.75 11.2012 17.4142 10.8654 17 10.8654H11.6154ZM12.3654 16.25V12.3654H16.25V16.25H12.3654Z"    fill="currentColor"    fill-rule="evenodd"    clip-rule="evenodd"    class="st-current"  ></path></svg>
        <p>Workspaces</p>
      </div>

      <div class="search-section flex">
        <div class="search-bar grid align-center">
          <svg  viewBox="0 0 20 20"  fill="currentColor"  width="16px"  height="16px"  aria-hidden="true"  class="icon_a2927e1dcf icon_82075aab38"  data-testid="icon">  <path    d="M8.65191 2.37299C6.9706 2.37299 5.35814 3.04089 4.16927 4.22976C2.9804 5.41863 2.3125 7.03108 2.3125 8.7124C2.3125 10.3937 2.9804 12.0062 4.16927 13.195C5.35814 14.3839 6.9706 15.0518 8.65191 15.0518C10.0813 15.0518 11.4609 14.5691 12.5728 13.6939L16.4086 17.5303C16.7014 17.8232 17.1763 17.8232 17.4692 17.5303C17.7621 17.2375 17.7622 16.7626 17.4693 16.4697L13.6334 12.6333C14.5086 11.5214 14.9913 10.1418 14.9913 8.7124C14.9913 7.03108 14.3234 5.41863 13.1346 4.22976C11.9457 3.04089 10.3332 2.37299 8.65191 2.37299ZM12.091 12.1172C12.9878 11.2113 13.4913 9.98783 13.4913 8.7124C13.4913 7.42891 12.9815 6.19798 12.0739 5.29042C11.1663 4.38285 9.9354 3.87299 8.65191 3.87299C7.36842 3.87299 6.1375 4.38285 5.22993 5.29042C4.32237 6.19798 3.8125 7.42891 3.8125 8.7124C3.8125 9.99589 4.32237 11.2268 5.22993 12.1344C6.1375 13.0419 7.36842 13.5518 8.65191 13.5518C9.92736 13.5518 11.1509 13.0483 12.0568 12.1514C12.0623 12.1455 12.0679 12.1397 12.0737 12.134C12.0794 12.1283 12.0851 12.1227 12.091 12.1172Z"    fill="currentColor"    fill-rule="evenodd"    clip-rule="evenodd"  ></path></svg>
          <input type="text" placeholder="Search" />
          <button title="filters" class="flex center">
            <svg    viewBox="0 0 20 20"    fill="currentColor"    width="16"    height="16"    role="img"    aria-hidden="true"  >    <path      d="M17.8571 2.87669C18.107 3.41157 18.0246 4.04275 17.6457 4.49555L12.4892 10.6589V15.3856C12.4892 16.0185 12.097 16.5852 11.5048 16.8082L9.56669 17.5381C9.09976 17.7139 8.57627 17.6494 8.16598 17.3655C7.75569 17.0816 7.51084 16.6144 7.51084 16.1155V10.6589L2.35425 4.49555C1.97542 4.04275 1.89302 3.41157 2.14291 2.87669C2.39279 2.34182 2.92977 2 3.52013 2H16.4799C17.0702 2 17.6072 2.34182 17.8571 2.87669ZM16.4799 3.52012H3.52013L8.91611 9.96964C8.99036 10.0584 9.03096 10.1698 9.03096 10.2848V16.1155L10.969 15.3856V10.2848C10.969 10.1698 11.0096 10.0584 11.0839 9.96964L16.4799 3.52012Z"      fill="currentColor"      fill-rule="evenodd"      clip-rule="evenodd"    ></path>  </svg>
          </button>
        </div>
        <button title="Add item to workspace" class="add-btn">
          <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" class="icon_a812034417 noFocusStyle_cfe994126a" data-testid="icon"><g id="Icon / Basic / Add"><path id="Union" d="M10 2.25C10.4142 2.25 10.75 2.58579 10.75 3V9.25H17C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H10.75V17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17V10.75H3C2.58579 10.75 2.25 10.4142 2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H9.25V3C9.25 2.58579 9.58579 2.25 10 2.25Z" fill="#fff" fill-rule="evenodd" clip-rule="evenodd"></path></g></svg>
        </button>
      </div>

      <ul class="boards flex column">
        <li class="tab-container flex align-center">
          <RouterLink to="/board" :class="isSelected('/board')" @contextmenu.prevent="openCloseOptions('3')"
            class="flex align-center">
              <svg  viewBox="0 0 20 20"  fill="currentColor"  width="18"  height="18"  aria-hidden="true"  class="icon_35c1b9ef14"  data-testid="icon">  <path    d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z"    fill="currentColor"    fill-rule="evenodd"    clip-rule="evenodd"  ></path></svg>
              <p>Sample board</p>
  
            <button class="options-btn flex center" @click.prevent="openCloseOptions('3')">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="13" height="13" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><g transform="translate(0,590) scale(0.1,-0.1)" fill="#000000" stroke="none"><path d="M764 2975 c-82 -18 -137 -47 -201 -107 -90 -86 -133 -185 -133 -308 0 -124 43 -222 135 -309 168 -159 422 -155 588 10 168 168 168 430 0 598 -65 64 -139 104 -227 120 -72 13 -84 13 -162 -4z"/><path d="M2487 2980 c-222 -39 -383 -262 -348 -481 38 -233 257 -396 482 -360 282 46 442 341 324 598 -79 174 -271 276 -458 243z"/><path d="M4180 2976 c-84 -18 -149 -54 -213 -117 -129 -129 -161 -314 -83 -484 32 -71 124 -163 197 -198 162 -76 345 -48 474 74 92 87 135 185 135 309 0 123 -43 222 -133 308 -65 61 -119 89 -206 108 -78 16 -98 16 -171 0z"/></g></svg>
            </button>
          </RouterLink>
          
          <OptionsModal v-if="isOpened('3')" :boardId="'0123'"/>
        </li>

        <li class="tab-container flex align-center">
          <RouterLink to="/board" :class="isSelected('/board/id')" @contextmenu.prevent="openCloseOptions('4')"
            class="flex align-center">
            <svg  viewBox="0 0 20 20"  fill="currentColor"  width="18"  height="18"  aria-hidden="true"  class="icon_35c1b9ef14"  data-testid="icon">  <path    d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z"    fill="currentColor"    fill-rule="evenodd"    clip-rule="evenodd"  ></path></svg>
            <p>[where all boards show up in list]</p>
            <button class="options-btn" @click.prevent="openCloseOptions('4')">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="13" height="13" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><g transform="translate(0,590) scale(0.1,-0.1)" fill="#000000" stroke="none"><path d="M764 2975 c-82 -18 -137 -47 -201 -107 -90 -86 -133 -185 -133 -308 0 -124 43 -222 135 -309 168 -159 422 -155 588 10 168 168 168 430 0 598 -65 64 -139 104 -227 120 -72 13 -84 13 -162 -4z"/><path d="M2487 2980 c-222 -39 -383 -262 -348 -481 38 -233 257 -396 482 -360 282 46 442 341 324 598 -79 174 -271 276 -458 243z"/><path d="M4180 2976 c-84 -18 -149 -54 -213 -117 -129 -129 -161 -314 -83 -484 32 -71 124 -163 197 -198 162 -76 345 -48 474 74 92 87 135 185 135 309 0 123 -43 222 -133 308 -65 61 -119 89 -206 108 -78 16 -98 16 -171 0z"/></g></svg>
            </button>
          </RouterLink>
          
          <OptionsModal v-if="isOpened('4')" :boardId="'0123'"/>
        </li>
      </ul>
    </section>
  </nav>
</template>

<script>
import { watch, ref } from "vue"
import { useRoute } from "vue-router"
import OptionsModal from "./OptionsModal.vue"

export default {
  setup() {
    const route = useRoute()
    const currPath = ref(route.path) // Make reactive reference

    watch(       // Watch the route and update currPath
      () => route.path, (newPath) => { currPath.value = newPath}
    )
    return { currPath }
  },
  data() {
    return {
      onFavorites: false,
      openedOptions: null,
    }
  },
  methods: {
    onFav() {
      this.onFavorites = !this.onFavorites
    },
    openCloseOptions(val = null) {
      if (this.openedOptions === val) this.openedOptions = null
      else this.openedOptions = val
    },
    handleOutsideClick(event) {  // Handle resetting filter type
      if (!event.target.closest('.options-btn') && !event.target.closest('.options-modal')) { this.openCloseOptions() }
      else if (event.target.closest('.options-modal')) { 
        event.stopPropagation()
        setTimeout(() => { this.openCloseOptions() }, 300)
      }
    },
  },
  computed: {
    isSelected() { // Handle class for selected styling
      return (val) => ({ selected: this.currPath === val })
    },
    isOpened() {  // Handle which board has opened options menu
      return (val) => this.openedOptions === val
    }
  },
  mounted() {     // Add global click listener
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeUnmount() {   // Remove global click listener
    document.removeEventListener('click', this.handleOutsideClick)
  },
  components: {
    OptionsModal,
  },
}
</script>

<style scoped lang="scss">
@import "../style/setup/vars";
@import "../style/setup/mixins";

nav {
  font-family: Figtree, Roboto;
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  background-image: linear-gradient($nav-background, transparent);

  gap: 0.125rem;

  .workplaces,
  .favorites,
  .boards {
    gap: 0.25rem;
  }

  .tab-container {
    position: relative;
    height: 2rem;
    background-color: transparent;
    padding: 0.5rem 0.375rem;
    border-radius: $border-radius-xs;

    gap: 0.45rem;
    
    a {
      height: 100%;
      width: 100%;

      gap: 0.45rem;
    }

    p {
      max-width: calc(100% - 3rem);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:not(.workspace-title) {
      cursor: pointer;

      &:hover {
        background-color: $primary-background-hover-color;

        .options-btn {
          display: block;
        }
      }

      &.selected {
        background-color: $primary-selected-color;
      }
    }

    &.workspace-title {
      margin-block-start: -0.25rem;
      cursor: default;
    }

    .options-btn {
      display: none;
      position: absolute;
      inset: 0.5rem 0.4rem auto auto;
      height: 1.5rem;
      width: 1.5rem;
      background-color: transparent;
      border-radius: $border-radius-xs;
      margin-block-start: -0.25rem;

      &:hover {
        background-color: $primary-background-hover-color;
      }
    }
  }

  .search-section {
    gap: 0.25rem;

    .search-bar {
      padding: 0.4rem 0.25rem 0.4rem 0.375rem;
      border: 1px $app-gray solid;
      border-radius: $border-radius-xs;
      max-width: calc(100% - 2.25rem);

      grid-template-columns: 1rem calc(100% - 2rem) 1rem;

      button {
        opacity: 0;
        transition: opacity 1s;
        background-color: transparent;
      }

      &:hover {
        border: 1px $font-color solid;

        button {
          opacity: 1;
        }
      }
    }

    .add-btn {
      @include blueBtn;
      width: 2rem;
    }
  }
}
</style>