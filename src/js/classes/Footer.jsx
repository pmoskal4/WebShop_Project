import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className='footer'>
        {this.props.children}
      </div>
    )
  }
}

export default Footer;