import React from "react";
import { connect } from "react-redux";

import { getData } from "../database/getData.jsx";
import FilterItems from './FilterItems.jsx';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetData();
  }

  render(){
    return (
      <div className='productsFilter'>
        <FilterItems itemsData={this.props.itemsData}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    itemsData: state.itemsData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetData: () => dispatch(getData()),
  };
}

SearchBox = connect(mapStateToProps, mapDispatchToProps)(SearchBox);

export default SearchBox;