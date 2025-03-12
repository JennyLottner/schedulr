<template>
  <section class="group-section">
    <h3 class="group-title">New Group</h3>

    <table>
      <thead>
        <tr class="grid group-grid">
          <th class="colored"></th>
          <th><input type="checkbox" /></th>
          <th class="span2">Item</th>
          <th>Person</th>
          <th>Status</th>
          <th>Date</th>
          <th>Label</th>
          <th>+</th>
        </tr>
      </thead>

      <tbody>
        <ItemCmp />
        <ItemCmp />
        <ItemCmp />

        <tr class="add-row group-grid grid">
          <td class="colored"></td>
          <td class="checkbox"></td>
          <td class="add-new-item item-name">
            <input type="text" placeholder="+ Add item" />
          </td>
          <td></td>
        </tr>
      </tbody>

      <tfoot>
        <tr class="group-grid grid">
          <td></td>
          <td class="status"></td>
          <td></td>
          <td class="label"></td>
        </tr>
      </tfoot>
    </table>
  </section>
</template>

<script>
import ItemCmp from './ItemCmp.vue';

export default {
  components: { ItemCmp }
}
</script>

<style lang="scss">
// not scoped so itemCmp gets table styling
// cornflowerblue is hardcoded here but needs to by dynamic
@import "../style/setup/vars";

.group-section {
  cursor: default;

  .group-title {
    color: cornflowerblue;
    margin-block-end: 0.75rem;
  }
  
  table {
    width: fit-content;
    border-spacing: 0;

    td,
    th {
      align-content: center;
      text-align: center;

      font-size: 0.875rem;
      font-weight: normal;
      color: $font-color;

      border-block-end: 1px solid $app-gray;
      border-inline-end: 1px solid $app-gray;
    }

    .span2 {
      grid-column: 3 / span 2;
    }

    .group-grid {
      grid-template-columns: 0.375rem 2rem 18.5rem 4.05rem 6.1rem repeat(3, 8.1rem) 4.05rem;
      grid-auto-rows: 2.25rem;
    }

    .colored {
      background-color: cornflowerblue;
      border: none;
    }

    thead {
      th {
        border-block-start: 1px solid $app-gray;

        &:first-of-type {
          border-radius: $border-radius-xs 0 0 0;
        }

        &:last-of-type {
          border-radius: 0 $border-radius-xs 0 0;
        }
      }
    }

    tbody {
      .add-row {
        grid-template-columns: 0.375rem 2rem 22.55rem 34.45rem;

        .colored {
          background-color: lighten(cornflowerblue, 20%);
        }

        input {
          width: 80%;
        }
      }
    }

    tbody .add-row,
    tfoot {
      td:first-of-type {
        border-radius: 0 0 0 $border-radius-xs;
      }

      td:last-of-type {
        border-radius: 0 0 $border-radius-xs 0;
      }
    }

    tfoot tr.grid {
      margin-inline-start: 24.855rem;
      grid-template-columns: 6.1rem repeat(3, 8.1rem);

      td:first-of-type {
        border-inline-start: 1px solid $app-gray;
      }

      .status {
        background-color: $status-none;
      }
    }
  }
}
</style>