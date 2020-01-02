import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory } from 'react-router'
import * as firebase from "firebase";

const configOptions = {
    apiKey: "AIzaSyCfDfUYduG3ipK2RaDkaKkLbDZEwuqVyos",
    authDomain: "music-agg-social-network.firebaseapp.com",
    databaseURL: "https://music-agg-social-network.firebaseio.com",
    projectId: "music-agg-social-network",
    storageBucket: "music-agg-social-network.appspot.com",
    messagingSenderId: "367275513381",
    appId: "1:367275513381:web:5f1de36aabcd2ec0b251cc",
    measurementId: "G-SKB221RDZJ"
  };
  
firebase.initializeApp(configOptions);


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
