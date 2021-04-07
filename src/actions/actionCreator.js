import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, INIT_TASK} from "../constans";
import {load} from "redux-localstorage-simple/dist/index";


export const initTask =  () => {
    return async function(dispatch) {

    let response = await fetch("https://5fec128e573752001730b0f1.mockapi.io/todoredux");
    response = await response.json();

        dispatch({
            type: INIT_TASK,
            tasks: response
        })
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