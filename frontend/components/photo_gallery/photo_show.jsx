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
      <div className='photo-show-page-container'>
        <div className='photo-show-image-conatiner'>        
          <img className='photo-show-image' src={px.pxURL} />
        </div>
        <div className='photo-details-container'>
          <div className='photo-details-left-col'>
            <div className='photo-details-main'>
              <div className='photo-title-name'>
                <div className='photo-details-title'>{px.title}</div>
                <div className='photo-details-fname'>by {px.creatorFName} {px.creatorLName}</div>
              </div>
              <div className='photo-creator-profile-image'>
              </div>
            </div>
            <div className='photo-details-sub'>
              <div className='photo-details-uploaded-date'>
                {px.created_at}
              </div>
              <div className='photo-details-description'>
                {px.description}
              </div>
            </div>
          </div>
          <div className='photo-details-right-col'>
            <h2>comments should go here</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoShow;