import {load} from "redux-localstorage-simple";
import {ADD_TASK, DELETE_TASK, COMPLETE_TASK} from "../constans";


let TASKS = load({namespace: 'todo-list'});

if (!TASKS || !TASKS.tasks?.length) {
    TASKS = {
        tasks: []
    }
}

const tasksReducer = (state = TASKS.tasks, {type, id, text, isCompleted}) => {

    switch (type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id,
                    text,
                    isCompleted
                }
            ];
        case DELETE_TASK:
            return state.filter(task => +task.id !== +id);


        case COMPLETE_TASK:
        return state.map(task => {
            if (+task.id === +id){
                return {
                    id: task.id,
                    text: task.text,
                    isCompleted: !task.isCompleted
                }
            }
            return task
        })



        default:
            return state
    }
};

export default tasksReducer;