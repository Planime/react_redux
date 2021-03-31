import React, {Component} from "react";
import {connect} from "react-redux";
import "semantic-ui-css/semantic.min.css";
import PropTypes from "prop-types";
import {addTask} from "../../actions/actionCreator"



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
            <>
                <div className="ui input form_container">
                    <p>Let's create our new task</p>
                    <input ref={this.input} className="input_field" type="text" placeholder="To Do task"/>
                    <button onClick={this.onClickBtn} className='ui primary button'>Let's do it</button>
                </div>
            </>
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
}

FormInput.defaultProps = {
    tasks: []
}


export default connect(mapToPropsState, {addTask})(FormInput)