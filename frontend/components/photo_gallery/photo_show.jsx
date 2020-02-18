import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId);
  }

  render() {
    const px = this.props.photo
    if (!px) return null;
    return (
      <div>
        <img src={px.pxURL} />
        <div>{px.title}</div>
        <div>{px.description}</div>

      </div>
    )
  }
}

export default PhotoShow;