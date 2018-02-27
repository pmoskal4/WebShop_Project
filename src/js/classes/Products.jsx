import React from "react";
import { connect } from "react-redux";

import { getData } from "../database/getData.jsx";
import ProductItems from './ProductItems.jsx';

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetData();
  }

  render(){
    return (
      <div className='productsColumn'>
        <ProductItems itemsData={this.props.itemsData} cart={this.props.cart}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    itemsData: state.itemsData,
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetData: () => dispatch(getData()),
  };
}

Products = connect(mapStateToProps, mapDispatchToProps)(Products);

export default Products;