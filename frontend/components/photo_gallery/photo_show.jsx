import React from 'react';
import CommentsContainer from '../comments/comments_container'
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      follow: false, 
    }
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let follow = false;
    if (nextProps.follows.followers && nextProps.session) {
      follow = Object.values(nextProps.follows.followers).map(follow => follow.follower_id).includes(nextProps.session.id); 
    } return { follow }
  }

  toggleFollow(action) {
    event.preventDefault();
    if (action === "Unfollow") {
      const follow = Object.values(this.props.follows.followers).filter(follower => follower.follower_id === this.props.session.id)[0];
      this.props.unFollow(follow);
    } else if (action === "Follow") {
      const follow = {
        follower_id: this.props.session.id,
        followed_id: this.props.photo[this.props.match.params.photoId].creator_id
      }
      this.props.postFollow(follow)
    }
  }

  render() {

    const px = this.props.photo[this.props.match.params.photoId];
    let userId, userFname, userLname, uploadTime, comments, photo, user;
    
    if (this.props.photo[this.props.match.params.photoId]) {
      photo = this.props.photo[this.props.match.params.photoId];
      user = Object.values(this.props.user)[0]
      userId = user.id;
      userFname = user.fname;
      userLname = user.lname;
      uploadTime = photo.created_at.split('T')[0];
      comments = this.props.comments;
    }
    if (!px) return null;

    const followButtonStatus = this.state.follow ? "Unfollow" : "Follow";

    return (
      <div className='photo-show-page-container'>
        <div className='photo-show-image-container'>        
          <img className='photo-show-image' src={px.pxURL} />
        </div>
        <div className='photo-details-container'>
          <div className='photo-details-cols' id='photo-details-left-col'>

            <div className='photo-details-main'>
              <div className='photo-title-name'>
                <div id='photo-details-title'>{px.title}</div>
                <div id='photo-details-name'>by <Link className='photo-details-user-link' to={`/users/${userId}`}>{userFname} {userLname}</Link> &bull; <span id="photoshow-follow-btn" onClick={() => this.toggleFollow(followButtonStatus)}>{followButtonStatus}</span></div>
              </div>
              <div className='photo-details-sub'>
                <div id='photo-details-uploaded-date'>
                  <span>Uploaded:</span> {uploadTime}
                </div>
                <div id='photo-details-description'>
                  {px.description}
                </div>
              </div>
            </div>

          </div>
          <div className='photo-details-cols' id='photo-details-right-col'>
            <CommentsContainer comments={comments} photo={photo}/>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoShow;