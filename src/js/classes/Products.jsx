import React from "react";
import { connect } from "react-redux"

import ProductItems from './ProductItems.jsx'

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className='productsDiv'>
        <ProductItems itemsData={this.props.products}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    itemsData: state.data
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

Products = connect(mapStateToProps, mapDispatchToProps)(Products);

export default Products;