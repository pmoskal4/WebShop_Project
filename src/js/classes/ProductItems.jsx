import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../database/addToCart.jsx";

class ProductItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    const { addProduct } = this.props;
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
            <p>{e.price/10}zł</p>
            <button onClick={addProduct}>Dodaj</button>
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
  return { addProduct: () => dispatch(addToCart()) }
};

ProductItems = connect(mapStateToProps, mapDispatchToProps)(ProductItems);

export default ProductItems;