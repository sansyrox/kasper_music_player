import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';

import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory, Redirect } from 'react-router'
import * as firebase from "firebase";
import configOptions from "./config";


firebase.initializeApp(configOptions);


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/:recent" component={App}  />
        <Redirect from="/" to="/new" />
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
