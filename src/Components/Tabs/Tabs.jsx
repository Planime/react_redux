import React, {Component} from "react";
import {connect} from "react-redux";
import {changeTab} from "../../actions/actionCreator";
import PropTypes from "prop-types";



class Tabs extends Component {

    onClickTabsHandler = (e) => {
        const btnAttr = e.target.dataset.btn;
        if (btnAttr) {
            this.props.changeTab(btnAttr)
        }

    };

    render() {
        const {activeTab} = this.props;
        return (
            <div
                onClick={this.onClickTabsHandler}
                className="ui three text tabular container">
                <button
                    data-btn="all"
                    className={`ui button ${activeTab === "all" ? 'orange' : null}`}
                >All
                </button>
                <button
                    data-btn="completed"
                    className={`ui button ${activeTab === "completed" ? 'orange' : null}`}>Completed
                </button>

                <button
                    data-btn="uncompleted"
                    className={`ui button ${activeTab === "uncompleted" ? 'orange' : null}`}>
                    Uncompleted
                </button>
            </div>
        )
    }
}

Tabs.propTypes = {
    activeTab: PropTypes.string,
    changeTab: PropTypes.func
};

Tabs.defaultProps = {
    activeTab: "all",
    changeTab: () => {}
}

export default connect(({activeTab}) => {
        return {activeTab}
    },
    {changeTab}
)(Tabs)