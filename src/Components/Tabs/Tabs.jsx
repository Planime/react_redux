import React, {Component} from "react";


class Tabs extends Component {

    onClickTabsHandler = (e) => {
        const btnAttr = e.target.dataset.btn
        if (btnAttr){

        }

    };

    render() {
        return (
            <div
                onClick={this.onClickTabsHandler}
                className="ui three text tabular container">
                <button
                    data-btn="all"
                    className="ui button orange"
                >All
                </button>
                <button
                    data-btn="completed"
                    className="ui button">Completed</button>
                <button
                    data-btn="uncompleted"
                    className="ui button">Uncompleted</button>
            </div>
        )
    }
}

export default Tabs