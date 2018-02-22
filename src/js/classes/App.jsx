import React from "react";

import Container from './Container.jsx'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Products from './Products.jsx'
import Footer from './Footer.jsx'

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

export default App;