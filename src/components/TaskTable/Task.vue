<template>
  <div class="task">
    <template v-if="!isEdit">
      {{ props?.task?.name ?? ''}}
    </template>
    <template v-else>
      <textarea v-model="name" />
    </template>
    <div>
      <button @click.prevent="btnHandler">
        <v-icon :name="iconName" />
      </button>
      <button v-show="!isEdit" @click.prevent="deleteTask">
        <v-icon name="md-cancel" />
      </button>
    </div>
  </div>

</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useCounterStore } from "../../stores/tasks";

const store = useCounterStore()
let props = defineProps({
  task: Object,
  columnId: Number
})
const name = ref(props?.task?.name);
let isEdit = ref(false)
const iconName = computed(() => isEdit.value ? "fa-check" : "md-modeeditoutline")

function btnHandler() {
  if (isEdit.value) {
    store.changeTask(props?.task?.id, props.columnId ?? 1, name )
  }
  isEdit.value = !isEdit.value
}
function deleteTask() {
  store.deleteTask(props?.task?.id, props.columnId ?? 1)
}
</script>

<style scoped>
.task {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 #091e4240;
  cursor: pointer;
  display: flex;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  padding: 6px 8px 2px;
  justify-content: space-between;
  align-items: center;
}

button {
  background: #fff;
  border: none;
}
</style>