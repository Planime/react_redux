import React, {Component} from "react";
import {connect} from "react-redux";


class ToDoList extends Component {
    render() {
        return (
            <div className="ui raised very padded text container segment">
                {this.props.tasks.map(task => (
                    <div className="ui raised padded segment  ">
                        <div className="meta">{task.text}</div>

                        <div className="ui buttons mini container right aligned">
                            <button className="ui button active">UnDone</button>
                            {/*<div className="or" data-text="or"></div>*/}
                            <button className="ui positive button">Done</button>
                        <button className="negative ui button">Delete</button>
                        </div>

                    </div>
                ))}

            </div>
        )
    }
}


export default connect((state) => {
    return state
})(ToDoList)