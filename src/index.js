import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import Routes from './constants/Routes';
import registerServiceWorker from './registerServiceWorker';
import store from "./constants/Store";
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes/>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
