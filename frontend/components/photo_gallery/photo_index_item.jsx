import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const PhotoIndexItem = ({ photo }) => {
  return (
    <div className='gallery-index-photo'>
      <Link to={`/photo/${photo.id}`}>
        <img className='photo-gallery-photo-item' src={photo.pxURL} />
      </Link>
    </div>
  )
}

export default withRouter(PhotoIndexItem);