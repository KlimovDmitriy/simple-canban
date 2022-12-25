<template>
    <div class="taskColumn">
        <div class="taskColumn__wrapper">
            <h2 class="taskColumn__heading">{{ props?.columnData?.title }} </h2>
            <div class="taskColumn__body">
                <draggableComponent class="list-group" :list="props?.columnData?.tasks" itemKey="id" group="tasks">
                    <template #item="{ element }">
                        <div class="list-group-item">
                            <Task :task="element" :key="element.id" :columnId="props?.columnData?.id" />
                        </div>
                    </template>
                </draggableComponent>
                <div class="taskColumn__btns">
                <button v-if="!isAdd" @click="isAdd = !isAdd">
                    Добавить задачу
                </button>
                <template v-else >
                    <textarea v-model="newTask">

                </textarea>
                    <button @click="addTask">
                        <v-icon name="bi-plus-square-fill" />
                    </button>
                </template>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Task from './Task.vue'
import draggableComponent from "vuedraggable";
import { ref } from 'vue';
import { useCounterStore } from "../../stores/tasks";

const store = useCounterStore()
const props = defineProps({
    columnData: Object
})
const isAdd = ref(false)
const newTask = ref('')

function addTask() {
    store.addTask(props?.columnData?.id, newTask.value)
    isAdd.value = !isAdd
}
</script>

<style scoped lang="scss">
.taskColumn__wrapper {
    padding: 0 10px;
}

h2 {
    margin: 8px 0;
}
.taskColumn__btns {
    display: flex;
    justify-content: space-between;

    & button {
        background-color: #fff;
        border: none;
    }
}
</style>