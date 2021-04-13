import React, {Component} from "react";
import PropTypes from "prop-types";

class Header extends Component{
    render () {
        return(
            <h1 className="ui header aligned center" id="todo_header">{this.props.title}</h1>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string
};

Header.defaultProps = {
    title: "Title is missing"
};


export default Header;