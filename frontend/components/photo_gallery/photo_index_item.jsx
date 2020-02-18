import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({ photo }) => {
  return (
    <div>
      <img src={photo.pxURL} />
    </div>
  )
}

export default PhotoIndexItem