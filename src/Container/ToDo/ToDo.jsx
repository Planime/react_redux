import React, {Component} from "react";
import FormInput from "../../Components/FormInput/FormInput";
import ToDoList from "../../Components/ToDoList/ToDoList";

class ToDo extends Component{
    render() {
        return(
            <div>
                <FormInput/>
                <ToDoList/>
            </div>
        )
    }
}


export default ToDo