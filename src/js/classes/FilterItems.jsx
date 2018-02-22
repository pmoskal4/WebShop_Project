import React from "react";

class FilterItems extends React.Component {
  constructor(props) {
    super(props);

  }


  render(){
    const products = this.props.itemsData.itemsData;

    if(products===undefined){
      return null;
    } else {

      let categories = products.map((e,i) => {
        return e.category
      });

      categories = [...new Set(categories)];

      let items = categories.map((e,i)=> {
        return (
          <label key={i}>
            <input type='checkbox' /> {e}
            <br />
          </label>
        )
      });
      return (
        <ul>
          {items}
        </ul>
      )
    }
  }
}

export default FilterItems;