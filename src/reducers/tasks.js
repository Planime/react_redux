
import {ADD_TASK, DELETE_TASK, COMPLETE_TASK, INIT_TASK} from "../constans";




const tasksReducer = (state = [], {type, id, text, isCompleted, tasks}) => {

    switch (type) {
        case INIT_TASK:
            return tasks;

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
        });



        default:
            return state
    }
};

export default tasksReducer;