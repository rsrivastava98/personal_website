import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import Image from 'react-bootstrap/Image';
 
 
class LightboxImage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      isOpen: false,
    };
  }
  
  render() {
   
    return (
      <div>
        <Image src = {this.props.image} className = "single-project-image" onClick={() => this.setState({ isOpen: true })} rounded/>

        {this.state.isOpen && (
          <Lightbox
            mainSrc={this.props.image}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

export default LightboxImage;