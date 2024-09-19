<template>
  <nav class="flex column">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink>My work</RouterLink>
    <div class="divider"></div>
    <RouterLink>Favorites</RouterLink>
    <div class="divider"></div>
    <div class="team-btn">My Team</div>
    <div class="search-section flex">
      <div class="search-bar flex align-center">
        <svg viewBox="0 0 20 20" fill="currentColor" width="16px" height="16px" aria-hidden="true" class="icon_a2927e1dcf icon_82075aab38" data-testid="icon"><path d="M8.65191 2.37299C6.9706 2.37299 5.35814 3.04089 4.16927 4.22976C2.9804 5.41863 2.3125 7.03108 2.3125 8.7124C2.3125 10.3937 2.9804 12.0062 4.16927 13.195C5.35814 14.3839 6.9706 15.0518 8.65191 15.0518C10.0813 15.0518 11.4609 14.5691 12.5728 13.6939L16.4086 17.5303C16.7014 17.8232 17.1763 17.8232 17.4692 17.5303C17.7621 17.2375 17.7622 16.7626 17.4693 16.4697L13.6334 12.6333C14.5086 11.5214 14.9913 10.1418 14.9913 8.7124C14.9913 7.03108 14.3234 5.41863 13.1346 4.22976C11.9457 3.04089 10.3332 2.37299 8.65191 2.37299ZM12.091 12.1172C12.9878 11.2113 13.4913 9.98783 13.4913 8.7124C13.4913 7.42891 12.9815 6.19798 12.0739 5.29042C11.1663 4.38285 9.9354 3.87299 8.65191 3.87299C7.36842 3.87299 6.1375 4.38285 5.22993 5.29042C4.32237 6.19798 3.8125 7.42891 3.8125 8.7124C3.8125 9.99589 4.32237 11.2268 5.22993 12.1344C6.1375 13.0419 7.36842 13.5518 8.65191 13.5518C9.92736 13.5518 11.1509 13.0483 12.0568 12.1514C12.0623 12.1455 12.0679 12.1397 12.0737 12.134C12.0794 12.1283 12.0851 12.1227 12.091 12.1172Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        <input type="text" placeholder="Search" />
        <button title="filters" class=" flex center"><svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" role="img" aria-hidden="true"><path d="M17.8571 2.87669C18.107 3.41157 18.0246 4.04275 17.6457 4.49555L12.4892 10.6589V15.3856C12.4892 16.0185 12.097 16.5852 11.5048 16.8082L9.56669 17.5381C9.09976 17.7139 8.57627 17.6494 8.16598 17.3655C7.75569 17.0816 7.51084 16.6144 7.51084 16.1155V10.6589L2.35425 4.49555C1.97542 4.04275 1.89302 3.41157 2.14291 2.87669C2.39279 2.34182 2.92977 2 3.52013 2H16.4799C17.0702 2 17.6072 2.34182 17.8571 2.87669ZM16.4799 3.52012H3.52013L8.91611 9.96964C8.99036 10.0584 9.03096 10.1698 9.03096 10.2848V16.1155L10.969 15.3856V10.2848C10.969 10.1698 11.0096 10.0584 11.0839 9.96964L16.4799 3.52012Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button>
      </div>
      <button title="Add item to workplace" class="add-btn">+</button>
    </div>
    <Accordion :accordionTitle="'My Team'" class="accordion-container">
      <div class="accordion-contents flex column">
        <RouterLink to="">Main</RouterLink>
        <RouterLink>Sprints</RouterLink>
        <RouterLink>Epics</RouterLink>
        <RouterLink>Bug Queue</RouterLink>
        <RouterLink>Retrospective</RouterLink>
        <RouterLink>Getting started</RouterLink>
      </div>
    </Accordion>
  </nav>
</template>

<script>
import Accordion from './Accordion.vue';

export default {
  components: {
    Accordion
  },
}
</script>

<style scoped lang="scss">
@import "../style/setup/vars";
@import "../style/setup/typography";

nav {
  padding: 0.25rem 0.75rem;
  background-color: $green-nav-background;
  font-family: Figtree, Roboto;
  font-size: 0.875rem;

  gap: 0.2rem;

  a, .team-btn {
    padding: 0.5rem 0.25rem 0.5rem 0.375rem;
    border-radius: 4px;

    &:hover {
      background-color: #ebeded;
    }

    &.selected {
      background-color: $green-btns;
    }
  }

  .divider {
    height: 1px;
    padding: 1px;
    background-color: $app-gray;
  }

  .team-btn {
    font-weight: bold;
    margin-block: 0.425rem;
  }

  .search-section {
    margin-block-end: 0.6rem;
    gap: 0.625rem;

    button {
        background-color: transparent;
        border: 1px $app-gray solid;
        border-radius: 4px;

        &:hover {
          background-color: #e7ecea;
        }
      }

    .search-bar {
      padding: 0.4rem 0.25rem 0.4rem 0.375rem;
      border: 1px $app-gray solid;
      border-radius: 4px;

      input {
        background-color: transparent;
        border: none;

        &:focus-visible {
          outline: none;
        }
      }

      button {
        border: none;
        opacity: 0;
        transition: opacity 1s;
      }

      &:hover {
        border: 1px $font-color solid;

        button {
          opacity: 1;
        }
      }
    }

    .add-btn {
      height: 2rem;
      width: 2rem;
    }
  }

  .accordion-container {
    height: 100%;
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: black;
    }

    ::-webkit-scrollbar-track {
        border-radius: 4px;
        background-color: gray;
    }

    .accordion-contents {
      padding-inline-start: 1.5rem;
      overflow-y: auto;

      gap: 0.1rem;

      a {
        &:hover {
          background-color: #e7ecea;
        }
      }
    }
  }
}
</style>