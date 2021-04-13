import React, {Component} from "react";
import {connect} from "react-redux";
import Task from "../Task/Task";
import {initTask} from "../../actions/actionCreator";


class ToDoList extends Component {

    componentDidMount() {
        this.props.initTask()
    }

    renderList() {
        switch (this.props.activeTab) {
            case "completed":
                return this.props.tasks.filter(task => task.isCompleted);
            case "uncompleted":
                return this.props.tasks.filter(task => !task.isCompleted);
            default:
                return this.props.tasks;
        }
    }


    render() {
        const filteredTasks = this.renderList();
        return (

            <div className="ui raised very padded text container segment">

                {filteredTasks.map(task => (
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