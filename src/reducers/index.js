import {combineReducers} from "redux";
import tasksReducer from "./tasks"
import tabsReducer from "./tabs";


const rootReducer = combineReducers({
        tasks: tasksReducer,
        activeTab: tabsReducer
    }
);


export default rootReducer;