import React, {Component} from "react";
import {connect} from "react-redux";
import Task from "../Task/Task";



class ToDoList extends Component {
    render() {

        return (
            <div className="ui raised very padded text container segment">
                {this.props.tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}/>
                ))}

            </div>
        )
    }
}


export default connect((state) => {
    return state
}
    )(ToDoList)