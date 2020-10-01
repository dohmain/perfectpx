import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoGallery extends React.Component {

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const photos = Object.values(this.props.photos).map(photo => (<PhotoIndexItem key={photo.id} photo={photo}/>));
    return (
      <div className='main-content-box'>
        <div id='photo-gallery-container'>
          {photos}
        </div>
      </div>
    )
  }
}

export default PhotoGallery;