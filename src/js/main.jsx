import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import {HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';

import store from './store/store.jsx';
import database from './firebase/firebase_config.js';
import '../css/main.css';

import App from './classes/App.jsx'

document.addEventListener('DOMContentLoaded', function(){

  //getting items from database
  const itemsData = database.once('value', snapshot => {
    //console.log(snapshot.val());
    return snapshot.val()
  });


const main = (
  <Provider store={ store }>
    <App />
  </Provider>
);

  ReactDOM.render(main, document.getElementById('app')
  );
});
