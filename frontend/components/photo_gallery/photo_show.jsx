import React from 'react';
import CommentsContainer from '../comments/comments_container'
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId)
  }

  render() {
    const px = this.props.photo;
    const user = this.props.user;
    const uploadTime = this.props.photo.created_at ? this.props.photo.created_at.split('T')[0] : null
    if (!px) return null;
    debugger
    return (
      <div className='photo-show-page-container'>
        <div className='photo-show-image-container'>        
          <img className='photo-show-image' src={px.pxURL} />
        </div>
        <div className='photo-details-container'>
          <div className='photo-details-left-col'>
            <div className='photo-details-main'>
              <div className='photo-title-name'>
                <div className='photo-details-title'>{px.title}</div>
                <div className='photo-details-name'>by <Link className='photo-details-user-link' to={`/users/${user.id}`}>{user.fname} {user.lname}</Link></div>
              </div>
              <div className='photo-details-sub'>
                <div className='photo-details-uploaded-date'>
                  Uploaded: {uploadTime}
                </div>
                <div className='photo-details-description'>
                  {px.description}
                </div>
              </div>
            </div>
          </div>
          <div className='photo-details-right-col'>
            <CommentsContainer comments={this.props.comments} 
                               commentIds={this.props.photo.comment_ids}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoShow;