import React, {Component} from "react";
import {connect} from "react-redux";
import "semantic-ui-css/semantic.min.css";
import PropTypes from "prop-types";
import {addTask} from "../../actions/actionCreator"

// here we add task and add it to store

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    onClickBtn = () => {
        this.props.addTask(
            Math.random(),
            this.input.current.value,
            false
        )
    };

    render() {
        return(

                <div className="ui input  container segments aligned center">
                    <div className="ui top header  aligned center segment">Let's create our new task</div>
                    <input ref={this.input} className="ui fluid icon input" type="text" placeholder="To Do task"/>
                    <button onClick={this.onClickBtn} className='ui primary button'>Let's do it</button>
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