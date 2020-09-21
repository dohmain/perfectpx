import React from 'react';
import PhotoIndexItem from '../../components/photo_gallery/photo_index_item';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: false, 
    }
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userId);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let follow = false;
    if (nextProps.follows.followers && nextProps.session) {
      follow = Object.values(nextProps.follows.followers).map(follow => follow.follower_id).includes(nextProps.session.id); 
    }
    return { follow }
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
    const photos = Object.values(this.props.photos).map(photo => (<PhotoIndexItem key={photo.id} photo={photo}/>));
    const user = this.props.user[this.props.match.params.userId];
    let userName, fName, lName, followingNumber, followerNumber;
    if (user) {
      followerNumber = user.follower_ids.length;
      followingNumber = user.following_ids.length;
      userName = user.username;
      fName = user.fname;
      lName = user.lname
    }
    const followButtonStatus = this.state.follow ? "Unfollow" : "Follow";
    const followButton = this.props.session ? <button onClick={() => this.toggleFollow(followButtonStatus)}>{followButtonStatus}</button> : <></>;
    return (
      <div className='main-content-box'>
        <div className='profile-main-container'>
          <span className='profile-username-display'>{userName}</span>
          {followButton}
          <div className='profile-name-container'><div><h3>{fName}</h3></div><div><h3>{lName}</h3></div></div>
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