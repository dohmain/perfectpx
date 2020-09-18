import React from 'react';
import CommentsContainer from '../comments/comments_container'
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId);
  }

  render() {

    const px = this.props.photo[this.props.match.params.photoId];
    let userId, userFname, userLname, uploadTime, comments;
    
    if (this.props.photo[this.props.match.params.photoId]) {
      let photo = this.props.photo[this.props.match.params.photoId];
      let user = Object.values(this.props.user)[0]
      userId = user.id;
      userFname = user.fname;
      userLname = user.lname;
      uploadTime = photo.created_at.split('T')[0];
      comments = this.props.comments;
    }
    if (!px) return null;
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
                <div className='photo-details-name'>by <Link className='photo-details-user-link' to={`/users/${userId}`}>{userFname} {userLname}</Link></div>
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
            <CommentsContainer comments={comments} />
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoShow;