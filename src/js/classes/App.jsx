import React from "react";

import Container from './Container.jsx'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Products from './Products.jsx'
import SearchBox from './SearchBox.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Container>
        <Header>
          <h1 className='logoTop'>Warzywniak</h1>
          <p className='shoppingCart'>Koszyk</p>
        </Header>
        <Body>
          <SearchBox />
          <Products />
        </Body>
        <Footer>
          <h3>To jest footer</h3>
        </Footer>
      </Container>
    )
  }
}

export default App;