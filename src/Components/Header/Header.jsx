import React, {Component} from "react";

class Header extends Component{
    render () {
        return(
            <h1 className="ui header aligned center" id="todo_header">{this.props.title}</h1>
        )
    }
}


export default Header;