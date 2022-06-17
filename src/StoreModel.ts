import { Action, action, Computed, computed, Thunk, thunk } from "easy-peasy"
import { Task } from "./components/Task/Task.types"

export interface TaskModelType {
    tasks: Task[],
    
    finishedTasks: Computed<TaskModelType, any, void, {}>,
    unFinishedTasks: Computed<TaskModelType, any, void, {}>,

    addTask: Action<TaskModelType, any>,
    deleteTask: Action<TaskModelType, any>,
    setTasks: Action<TaskModelType, Task[]>,
    reload: Thunk<TaskModelType>,
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
    }),
    deleteTask: action((state, payload) => {
        const listWithoutTask = state.tasks.filter(task => task.id !== payload.id);
        state.tasks = listWithoutTask;
    }),
    setTasks: action((state, payload) => {
        state.tasks = payload;
    }),
    reload: thunk(async (actions) => {
        console.log("Reloading...");
        
        const responseTodos: ResponseTodoType[] = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json();
        const newTasks: Task[] = [];
        for (const responseTodo of responseTodos) {
            const newTask: Task = {
                id: responseTodo.id,
                title: responseTodo.title,
                done: responseTodo.completed,
            }
            newTasks.push(newTask)
        }
        actions.setTasks(newTasks);
    })
}
interface ResponseTodoType {
    id: Number,
    title: String,
    completed: boolean,
    userId: Number,
}
export interface ModelType {
    taskModel: TaskModelType
}
export const model: ModelType = {
    taskModel: taskModel
}
