import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({ photo }) => {
  return (
    <div>
      <Link to={`/photo/${photo.id}`}>
        <img className='photo-gallery-photo-item' src={photo.pxURL} />
      </Link>
    </div>
  )
}

export default PhotoIndexItem