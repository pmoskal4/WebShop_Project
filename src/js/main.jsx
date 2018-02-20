import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
require('../css/main.css');


class Products extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
          <div className='productsDiv'>
            {this.props.children}
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
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
