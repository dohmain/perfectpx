import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    debugger;
    const photo = this.props.photos ? Object.values(this.props.photos).map(photo => {
      return <PhotoIndexItem key={`px.${photo.id}`} photo={photo} />
    }) : null;
    return (
      <div className='photo-gallery-container'>
        {photo}
      </div>
    )
  }
}

export default PhotoGallery;