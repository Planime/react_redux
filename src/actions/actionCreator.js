import {ADD_TASK, COMPLETE_TASK, DELETE_TASK} from "../constans";


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