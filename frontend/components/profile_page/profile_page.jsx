import React from 'react';
import PhotoIndexItem from '../../components/photo_gallery/photo_index_item';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Object.values(this.props.user)[0].id
    }
    this.toggleFollow = this.toggleFollow.bind(this);
    this.undoFollow = this.undoFollow.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userId);
  }
  
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.match.params.userId != prevState.id) {
  //     return {
  //       id: nextProps.match.params.userId
  //     }
  //   }
  //   return null;
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
      this.props.getUser(this.props.match.params.userId);
    }
  }
  
  toggleFollow(e) {
    e.preventDefault();
    const follow = {
      follower_id: this.props.session.id,
      followed_id: this.props.match.params.userId
    }
    this.props.postFollow(follow)
  }

  undoFollow(e) {
    e.preventDefault();
    debugger;
    const follow = Object.values(this.props.follows.followers).filter(follower => follower.follower_id === this.props.session.id)[0];
    this.props.unFollow(follow)
  }

  render() {
    const photos = Object.values(this.props.photos).map(photo => (<PhotoIndexItem key={photo.id} photo={photo}/>));
    const user = Object.values(this.props.user)[0];
    const followingNumber = user.following_ids.length;
    const followerNumber = user.follower_ids.length;
    return (
      <div className='main-content-box'>
        <div className='profile-main-container'>
          <span className='profile-username-display'>{user.username}</span>
          <button onClick={this.toggleFollow}>follow</button>
          <button onClick={this.undoFollow}>unfollow</button> 
          <div className='profile-name-container'><div><h3>{user.fname}</h3></div><div><h3>{user.lname}</h3></div></div>
          <div className='profile-follow-container'><span className='profile-follow-count'>{followerNumber} Followers</span><span className='profile-follow-count'>{followingNumber} Following</span></div>
          <div className='profile-photo-gallery'>
            <span className='profile-photo-gallery-heading'>PHOTOS</span>
          </div>
          <div className='profile-photos-container'>
              {photos}
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage;