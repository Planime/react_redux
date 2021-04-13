import React, {Component} from "react";
import {connect} from "react-redux";
import Task from "../Task/Task";
import {initTask} from "../../actions/actionCreator";
import PropTypes from "prop-types";


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

ToDoList.propTypes = {
    activeTab: PropTypes.string,
    initTask: PropTypes.func,
    tasks: PropTypes.arrayOf(PropTypes.object)
};

ToDoList.defaultProps = {
    activeTab: "",
    initTask: () => {},
    tasks: []
};

export default connect((state) => {
        return state
    },
    {
        initTask
    }
)(ToDoList)