import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose  } from 'redux';
import { Provider } from 'react-redux';
import { reactReduxFirebase, firebaseReducer, firebaseConnect } from 'react-redux-firebase'
const appFirebase = require('firebase/app');
//import database from './firebase/firebase_config.js';

import {HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import * as firebase from "firebase";
require('../css/main.css');

class ProductItems extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
      //console.log(database);
    }

    render(){
      // let productsList = this.props.itemsData.map((e,i)=> {
      //   return (
      //     <div>
      //       <h3>{e.name}</h3>
      //       <img src={e.image} />
      //       <p>{e.price}</p>
      //     </div>
      //   )
      // });

        return (
          <p>japko</p>
          //{productsList}
        )
    }
}

class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
      //console.log(this.props);
    }

    render(){
        return (
          <div className='productsDiv'>
            <ProductItems itemsData={this.props.products}/>
          </div>
        )
    }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className='header'>
        {this.props.children}
      </div>
    )
  }
}

class Body extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
          <div className='body'>
            {this.props.children}
          </div>
        )
    }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className='footer'>
        {this.props.children}
      </div>
    )
  }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
          <div className='container'>
            {this.props.children}
          </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render(){
        return (
          <Container>
            <Header>
              <h1 className='logoTop'>Logo</h1>
              <p className='basket'>Koszyk</p>
              <button className='logBtn'>Zaloguj / wyloguj</button>
            </Header>
            <Body>
              <div className='filterColumn'>
                <p>Tu będą filtry i szukajka</p>
              </div>
              <Products>
                <p>Tu będzie lista produktów</p>
              </Products>
            </Body>
            <Footer>
              <h3>To jest footer</h3>
            </Footer>
          </Container>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){

  const firebaseConfig = {
    apiKey: "AIzaSyBl6EOzknHtkrxhFovlki9rNXNu51zdeuA",
    authDomain: "webshopproject-241b3.firebaseapp.com",
    databaseURL: "https://webshopproject-241b3.firebaseio.com",
    projectId: "webshopproject-241b3",
    storageBucket: "webshopproject-241b3.appspot.com",
    messagingSenderId: "485158305853"
  };

  appFirebase.initializeApp(firebaseConfig);

  // react-redux-firebase config
  const rrfConfig = {
    userProfile: 'users',
  };

  // Add reactReduxFirebase enhancer when making store creator
  const createStoreWithFirebase = compose(
    reactReduxFirebase(appFirebase, rrfConfig), // firebase instance as first argument
    )(createStore);

  // Add firebase to reducers
  const rootReducer = combineReducers({
    firebase: firebaseReducer,
  });

  const initialState = {};
  //   database.once('value', snapshot => {
  //   //console.log(snapshot.val());
  //   return snapshot.val()
  // });
  const store = createStoreWithFirebase(rootReducer, initialState);


  // const itemsData = database.once('value', snapshot => {
  //   //console.log(snapshot.val());
  //   return snapshot.val()
  // });
  //
  // const reducer = (state, action) => {
  //   return state
  // };
  //
  // const store = createStore(reducer, itemsData);

let data = '';
  const items = appFirebase.database().ref('/products').once('value', snapshot => {
       console.log(snapshot.val());
       data = snapshot.val();

       return snapshot.val();
     });

  console.log(items);

    ReactDOM.render(
      <Provider store={ store }>
        <App />
      </Provider>,
      document.getElementById('app')
    );
});
