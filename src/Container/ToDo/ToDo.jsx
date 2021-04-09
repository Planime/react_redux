import React, {Component} from "react";
import FormInput from "../../Components/FormInput/FormInput";
import ToDoList from "../../Components/ToDoList/ToDoList";
import Tabs from "../../Components/Tabs/Tabs";

class ToDo extends Component{
    render() {
        return(
            <div>
                <FormInput/>
                <Tabs/>
                <ToDoList/>
            </div>
        )
    }
}


export default ToDo