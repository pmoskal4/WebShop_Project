import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store.jsx';

import '../css/main.css';

import App from './classes/App.jsx'

document.addEventListener('DOMContentLoaded', function(){

const main = (
  <Provider store={ store }>
    <App />
  </Provider>
);

  ReactDOM.render(main, document.getElementById('app')
  );
});
