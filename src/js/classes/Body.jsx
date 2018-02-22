import React from "react";

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

export default Body;