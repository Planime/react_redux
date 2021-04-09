
import {ADD_TASK, DELETE_TASK, COMPLETE_TASK, INIT_TASK} from "../constans";




const tasksReducer = (state = [], {type, ...action}) => {

    switch (type) {
        case INIT_TASK:
            return action.tasks;

        case ADD_TASK:
            const {id, text, isCompleted} = action;

            return [
                ...state,
                {
                    id,
                    text,
                    isCompleted
                }
            ];
        case DELETE_TASK:
            return state.filter(task => +task.id !== +action.id);


        case COMPLETE_TASK:
        return state.map(task => {
            if (+task.id === +action.changedTask.id){
                return action.changedTask
            }
            return task
        });



        default:
            return state
    }
};

export default tasksReducer;