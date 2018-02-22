import React from "react";

class ProductItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const products = this.props.itemsData.itemsData;
    console.log(products);

    if(products===undefined){
      return null;
    } else {
      let items = products.map((e,i)=> {
        return (
          <div key={i} className='singleItem'>
            <img src={e.image} style={{width: '100%', height: 'auto'}}/>
            <p>{e.name}</p>
            <p>{e.price/10}zł</p>
            <button>Dodaj</button>
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

export default ProductItems;