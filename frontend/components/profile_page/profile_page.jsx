import React from 'react';
import PhotoIndexItem from '../../components/photo_gallery/photo_index_item';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: false
    }
    this.doFollow = this.doFollow.bind(this);
    this.undoFollow = this.undoFollow.bind(this);
    this.putConsole = this.putConsole.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userId);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    debugger;
    // return null;
    return {
      user: nextProps.user[nextProps.match.params.userId]
    }
  }

  // componentDidUpdate(prevProps) {
  //   debugger;
  //     if (prevProps.match.user[this.props.match.params.userId] != this.props.user[this.props.match.params.userId]) {
  //       this.props.getUser(this.props.match.params.userId);
  //     }
  //   // if (prevProps.follows.followers != this.props.followers) {
  //   //   this.setState({followed: true})
  //   // }
  // }
  
  doFollow(e) {
    e.preventDefault();
    const follow = {
      follower_id: this.props.session.id,
      followed_id: this.props.match.params.userId
    }
    this.props.postFollow(follow)
    // setState after posting follow
  }

  undoFollow(e) {
    e.preventDefault();
    const follow = Object.values(this.props.follows.followers).filter(follower => follower.follower_id === this.props.session.id)[0];
    this.props.unFollow(follow)
    // setState after unFollow
  }

  // toggleFollow(e) {

  // }

  putConsole(e) {
    e.preventDefault();
    console.log(this.props);
    console.log("state", this.state);
    console.log(this.props.user);
  }

  render() {
    const photos = Object.values(this.props.photos).map(photo => (<PhotoIndexItem key={photo.id} photo={photo}/>));
    // const user = this.props.user[this.props.match.params.userId]
    console.log(this.user)
    // const followingNumber = this.user.following_ids.length;
    // const followerNumber = this.user.follower_ids.length;
    // const followStatus = this.state.followed ? "Unfollow (toggle)" : "Follow (toggle)";
    return (
      <div className='main-content-box'>
        <div className='profile-main-container'>
          {/* <span className='profile-username-display'>{user.username}</span> */}
          <button onClick={this.putConsole}>console</button>
          <button onClick={this.doFollow}>follow</button>
          <button onClick={this.undoFollow}>unfollow</button> 
          {/* <button>{followStatus}</button> */}
          {/* <div className='profile-name-container'><div><h3>{user.fname}</h3></div><div><h3>{user.lname}</h3></div></div> */}
          {/* <div className='profile-follow-container'><span className='profile-follow-count'>{followerNumber} Followers</span><span className='profile-follow-count'>{followingNumber} Following</span></div> */}
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