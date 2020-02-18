import React from 'react';
import { Link } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item'

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const photo = this.props.photos.map(photo => <PhotoIndexItem key={`px.${photo.id}`} photo={photo} />)
    return (
      <div>
        {photo}
      </div>
    )
  }
}

export default PhotoGallery;