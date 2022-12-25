<script setup lang="ts">
import TaskTable from "./components/TaskTable/TaskTable.vue";
</script>
<template>
  <TaskTable />
</template>

<style lang="scss">
.taskColumn {
  box-sizing: border-box;
  display: inline-block;
  height: 100vh;
  margin: 0 4px;
  vertical-align: top;
  white-space: nowrap;
  width: 272px;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  &__wrapper {
    background-color: var(--ds-background-accent-gray-subtlest, #ebecf0);
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    white-space: normal;
    width: 100% !important;

  }
}
</style>
