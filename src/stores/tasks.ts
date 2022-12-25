import { MdAddtask } from "oh-vue-icons/icons";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("tasks", {
  state: () : State => ({
    taskColumns: [
      {
        title: "Первая колонка",
        tasks: [
          {
            id: 1,
            name: "Первая задача",
          },
          {
            id: 2,
            name: "Вторая задача",
          },
          {
            id: 3,
            name: "Третья задача",
          },
        ],
        id: 1,
      },
      {
        title: "Вторая колонка",
        tasks: [
          {
            id: 4,
            name: "Первая задача№2",
          },
          {
            id: 5,
            name: "Вторая задача№2",
          },
          {
            id: 6,
            name: "Третья задача№2",
          },
        ],
        id: 2,
      },
      {
        title: "Третья колонка",
        tasks: [
          {
            id: 7,
            name: "Первая задача№3",
          },
          {
            id: 8,
            name: "Вторая задача№3",
          },
          {
            id: 9,
            name: "Третья задача№3",
          },
        ],
        id: 3,
      },
    ],
  }),

  actions: {
    changeTask(taskId: number, columnId: number, newValue: string) {
      const col = this.taskColumns.find((col) => col.id === columnId);
      const task = col?.tasks.find((el) => el.id === taskId);
      task!.name = newValue;
    },
    addTask(columnId:number, value: string) {
      let changedColumn = this.taskColumns.find((col) => col.id === columnId);
      changedColumn?.tasks.push({
        id: Math.floor(Math.random() * 100),
        name: value,
      });
    },
    deleteTask(taskId: number, columnId: number) {
      let changedColumn = this.taskColumns.find((col) => col.id === columnId);
      changedColumn!.tasks = changedColumn!.tasks.filter(
        (el) => el.id !== taskId
      );
    },
  },
});

interface TaskColumn {
  id:  number,
  tasks: Task[],
  title: string
}

interface Task {
  name: string,
  id: number,
  
}

interface State {
  taskColumns: TaskColumn[]
}