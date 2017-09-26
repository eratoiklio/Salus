import ImageGallery from 'react-image-gallery';
import React from 'react';
import ReactDOM from 'react-dom';


export default class Gallery extends React.Component {


  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {
    return (
      <ImageGallery
        items={this.props.images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>
    );
  }

}
