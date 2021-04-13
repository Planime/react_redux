import {CHANGE_TAB} from "../constans";


const tabsReducer = (state = "all", action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return action.tab;

        default: return state

    }
};

export default tabsReducer;