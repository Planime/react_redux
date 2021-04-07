import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, INIT_TASK} from "../constans";
import {load} from "redux-localstorage-simple/dist/index";


export const initTask = () => {
let TASKS = load({namespace: 'todo-list'});

    if (!TASKS || !TASKS.tasks?.length) {
        TASKS = {
            tasks: []
        }
    }
    return {
        type: INIT_TASK,
        tasks: TASKS.tasks
    }
};

export const addTask = (id, text, isCompleted) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id
});

export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    id
});