import { Action, action, Computed, computed } from "easy-peasy"
import { Task } from "./components/Task/Task.types"

export interface TaskModelType {
    tasks: Task[],
    addTask: Action<TaskModelType, any>,
    finishedTasks: Computed<TaskModelType, any, void, {}>,
    unFinishedTasks: Computed<TaskModelType, any, void, {}>,
}
export const taskModel: TaskModelType = {
    tasks: [
        {
            id: 1,
            title: "Learn React",
            done: true
        },
        {
            id: 2,
            title: "Learn Next.Js",
            done: false
        }
    ],
    finishedTasks: computed((state) => state.tasks.filter(task => task.done === true)),
    unFinishedTasks: computed((state) => state.tasks.filter(task => task.done === false)),

    addTask: action((state, payload) => {
        const event: React.FormEvent = payload.event;
        event.preventDefault();

        const newTask: Task = {
            id: state.tasks.length + 1,
            title: payload.title,
            done: payload.done
        };
        state.tasks.push(newTask);
    })
}
export interface ModelType {
    taskModel: TaskModelType
}
export const model: ModelType = {
    taskModel: taskModel
}
