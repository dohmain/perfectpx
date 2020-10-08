import React from 'react';
import PhotoIndexItem from '../../components/photo_gallery/photo_index_item';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  componentDidMount() {
    debugger;
    this.props.getUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.getUser(this.props.match.params.userId);
    }
  }

  toggleFollow(action) {
    event.preventDefault();
    if (action === "Unfollow") {
      const follow = Object.values(this.props.follows.followers).filter(follower => follower.follower_id === this.props.session.id)[0];
      this.props.unFollow(follow);
    } else if (action === "Follow") {
      const follow = {
        follower_id: this.props.session.id,
        followed_id: this.props.match.params.userId
      }
      this.props.postFollow(follow)
    }
  }

  render() {
    let user = "", followers = [], followings = [], photos = []

    if (this.props.user) {
      user = this.props.user;
      photos = this.props.photos.map(photo => (<PhotoIndexItem key={photo.id} photo={photo}/>));
      followers = this.props.user.follower_ids.length;
      followings = this.props.user.following_ids.length;
    }
    debugger;
    const followButton = this.props.isFollowed ? "Unfollow" : "Follow";
    debugger;
    return (
      <div className='main-content-box'>
        <div id='profile-heading-container'>
          <div id='profile-names-container'>
            <div className='profile-block' id='profile-username-container'><span id='profile-username-display'>{user.username}</span></div>
            <div className='profile-block' id='profile-name-container'>
              <div id='profile-fname-container'>
                <span className='profile-name' id='profile-fname'>{user.fname}</span>
              </div>
              <div id='profile-lname-container'>
                <span className='profile-name' id='profile-lname'>{user.lname}</span>
              </div>
            </div>
          </div>
          <div className='profile-block' id='profile-follow-button-container'>
            <button id='profile-follow-button' onClick={() => this.toggleFollow(followButton)}>{followButton}</button>
          </div>
          <div className='profile-block' id='profile-stats-container'>
            <div id='follow-left-container'>
              <span className='follow-count'>{followers}</span> <span className='follow-text'>Followers</span>
            </div>
            <div id='follow-right-container'>
              <span className='follow-count'>{followings}</span> <span className='follow-text'>Following</span>
            </div>
          </div>
        <div id='profile-gallery-heading'><span id='profile-photo-heading'>Photos</span></div>
        </div>
        <div id='profile-gallery'>
          <div id='photo-gallery-container'>
              {photos}
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage;