import React from "react";
import { connect } from "react-redux";

import * as addProducts from "../database/addToCart.jsx";

class ProductItems extends React.Component {
  constructor(props) {
    super(props);
  }

  addProduct(input){
    this.props.addProductToCart(input);
  }

  render(){

    const products = this.props.itemsData.itemsData;
    console.log(this.props);

    if(products===undefined){
      return null;
    } else {
      let items = products.map((e,i)=> {
        return (
          <div key={i} className='singleItem'>
            <img src={e.image} style={{width: '100%', height: 'auto'}}/>
            <p>{e.name}</p>
            <p>{e.price} Rs</p>
            <button onClick={event => {
              this.addProduct(e);
            }}>Dodaj</button>
          </div>
        )
      });
      return (
        <div>
          {items}
        </div>
      )
    }
  }
}

const mapStateToProps= (state) => {
  return { cart: state.cart }
};

const mapDispatchToProps = (dispatch) => {
  return { addProductToCart: product => dispatch(addProducts.addProductToCart(product)) }
};

ProductItems = connect(mapStateToProps, mapDispatchToProps)(ProductItems);

export default ProductItems;