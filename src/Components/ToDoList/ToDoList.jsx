import React, {Component} from "react";
import {connect} from "react-redux";
import Task from "../Task/Task";
import {initTask} from "../../actions/actionCreator";


class ToDoList extends Component {

    componentDidMount() {
        this.props.initTask()
    }

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
    },
    {
        initTask
    }
)(ToDoList)