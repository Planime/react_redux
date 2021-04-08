import React, {Component} from "react";
import {connect} from "react-redux";
import "semantic-ui-css/semantic.min.css";
import PropTypes from "prop-types";
import {addTask} from "../../actions/actionCreator"

// here we add task and add it to store

class FormInput extends Component {

    state = {
        taskInput: ""
    } ;

    onChangeHandler = (e) => {

        this.setState(()=> {
            return {
                taskInput: e.target.value
            }
        })
    };

    onClickBtn = () => {
        if (this.state.taskInput.length >= 3) {
            this.props.addTask(
                this.state.taskInput,
                false
            );
            this.setState(()=>{
                return{
                    taskInput: ""
                }
            })
        }
    };

    render() {
        return (
            <div className="ui very text container segment">
                <div className="ui input  container segments aligned center" id="input_container">
                    <div className="ui top header  aligned center segment">Let's create our new task</div>
                    <input
                        value={this.state.taskInput}
                        onChange={this.onChangeHandler}
                        className="ui fluid icon input"
                        type="text"
                        placeholder="To Do task"
                    />
                    <button onClick={this.onClickBtn}
                            className='ui primary button' id="task_btn">Let's do it</button>
                </div>
            </div>

        )
    }
}

const mapToPropsState = ({tasks}) => {
    return {
        tasks
    }
};


FormInput.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired
};

FormInput.defaultProps = {
    tasks: []
};


export default connect(mapToPropsState, {addTask})(FormInput)