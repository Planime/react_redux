import React, {Component} from "react";
import {connect} from 'react-redux';
import {deleteTask, completeTask} from "../../actions/actionCreator";


class Task extends Component {

    onClickHandler = (event) => {
        switch (event.target.getAttribute("data-btn")) {
            case "complete":
                this.props.completeTask(event.currentTarget.id);
                break;
            case "delete":
                this.props.deleteTask(event.currentTarget.id);
                break
        }
    };


    render() {

        return (
            <div
                onClick={this.onClickHandler}
                id={this.props.task.id}
                className="ui raised padded segment  ">
                <div className="meta">{this.props.task.text}</div>

                <div
                    className="ui buttons mini container right aligned">
                    <button
                        data-btn="complete"
                        className="ui positive button">Done
                    </button>
                    <button
                        data-btn="delete"
                        className="negative ui button">Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(null, {deleteTask, completeTask})(Task)