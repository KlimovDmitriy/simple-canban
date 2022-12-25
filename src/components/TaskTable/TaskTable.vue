<template >

  <TaskColumn v-for="taskColumn in taskColumns" :key="taskColumn.id" :columnData="taskColumn" />
</template>

<script setup lang="ts">
import TaskColumn from "./TaskColumn.vue";
import { useCounterStore } from "../../stores/tasks";
import { storeToRefs } from "pinia";
const store = useCounterStore()
const { taskColumns } = storeToRefs(store)
</script>

<style scoped>

</style>