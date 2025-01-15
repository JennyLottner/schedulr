<template>
  <section class="main-page">
    <header class="flex column">
      <section class="main-title flex space-between">
        <button class="project-title-btn flex center">
          <h1>Main</h1>
        </button>

        <button class="more-settings-btn flex align-center">
          <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" aria-hidden="true" class="icon_d6a7187c13 noFocusStyle_48049c26c1" data-testid="icon"><path d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z" fill="currentColor"></path></svg>
        </button>
      </section>

      <section class="secondary-title flex align-center">
        <span class="house-icon">
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" class="icon_90dcd5fe7a egsFo" data-testid="icon"><path d="M9.56992 2.1408C9.82591 1.95307 10.1741 1.95307 10.4301 2.1408L17.7028 7.47413C17.8896 7.61113 18 7.82894 18 8.06061V16.7879C18 17.1895 17.6744 17.5152 17.2727 17.5152H11.9394C11.5377 17.5152 11.2121 17.1895 11.2121 16.7879V13.1515H8.78788V16.7879C8.78788 17.1895 8.46227 17.5152 8.06061 17.5152H2.72727C2.32561 17.5152 2 17.1895 2 16.7879V8.06061C2 7.82894 2.11037 7.61113 2.29719 7.47413L9.56992 2.1408ZM3.45455 8.42914V16.0606H7.33333V12.4242C7.33333 12.0226 7.65894 11.697 8.06061 11.697H11.9394C12.3411 11.697 12.6667 12.0226 12.6667 12.4242V16.0606H16.5455V8.42914L10 3.62914L3.45455 8.42914Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>  </svg>
        </span>
        <p>Main Table</p>
        <button class="more-btn flex align-center">
          <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" aria-hidden="true" class="icon_d6a7187c13 noFocusStyle_48049c26c1" data-testid="icon"> <path d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z" fill="currentColor" ></path></svg>
        </button>
      </section>

      <section class="filtering-section">
      </section>
    </header>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import "../../../style/setup/vars";
@import "../../../style/basics/helpers";

.main-page {
  height: 100%;
  padding: 1.125rem 1.875rem 0 2.375rem;
  border-radius: 0.5rem 0 0 0;
  background-color: white;

  header {
    gap: 0.5rem;

    .project-title-btn,
    .more-settings-btn,
    .secondary-title {
      border-radius: $border-radius-xs;
      background-color: transparent;
      padding: 0rem 0.25rem;
      color: #323338;
      
      &:hover {
        background-color: $primary-background-hover-color;
      }
      
      & > h1 {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.875rem;
        font-family: Poppins, Roboto;
      }
    }
    
    .secondary-title {
      width: fit-content;
      padding-inline-end: 0;
      cursor: pointer;
      
      .house-icon {
        transform: translateY(2px);
      }
      
      p {
        font-size: 0.875rem;
        padding-inline: 0.25rem;
      }
      
      .more-btn {
        scale: 0.6;
        background-color: transparent;
        border-radius: $border-radius-xs;
        padding: 0.2rem;
        
        &:hover {
          background-color: #cce5ff;
        }
      }
    }
  }
}
</style>