import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./store";
import {Provider} from "react-redux";
import Main from "./Main/Main";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Main/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

