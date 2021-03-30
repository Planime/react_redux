import React, {Component} from "react";
import "semantic-ui-css/semantic.min.css";



class FormInput extends Component {
    render() {
        return(
            <>
                <div className="ui input form_container">
                    <p>Let's create our new task</p>
                    <input className="input_field" type="text" placeholder="To Do task"/>
                    <button className='ui primary button'>Let's do it</button>
                </div>
            </>
        )
    }
}


export default FormInput