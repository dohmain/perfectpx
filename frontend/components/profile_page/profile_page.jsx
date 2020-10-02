import React from 'react';
import PhotoIndexItem from '../../components/photo_gallery/photo_index_item';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      fname: "",
      lname: "",
      followers: "",
      following: "",
      photos: [],
    }
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userId);
  }
  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.setState({
        username: this.props.user.username,
        fname: this.props.user.fname,
        lname: this.props.user.lname,
        followers: this.props.user.follower_ids.length,
        following: this.props.user.following_ids.length,
        photos: this.props.photos
      }
    )};
  }

  render() {
    const user = this.state;
    const photos = user.photos.map( photo => (<PhotoIndexItem key={photo.id} photo={photo}/>))
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
            <button id='profile-follow-button'>Follow</button>
          </div>
          <div className='profile-block' id='profile-stats-container'>
            <div id='follow-left-container'>
              <span className='follow-count'>{user.followers}</span> <span className='follow-text'>Followers</span>
            </div>
            <div id='follow-right-container'>
              <span className='follow-count'>{user.following}</span> <span className='follow-text'>Following</span>
            </div>
          </div>
          
          {/* <span id="profile-follow-btn" onClick={() => this.toggleFollow(followButtonStatus)}>{followButtonStatus}</span>
          <div className='profile-name-container'><div><h3>{fName}</h3></div><div><h3>{lName}</h3></div></div>
          <div className='profile-follow-container'><span className='profile-follow-count'>{followerNumber} Followers</span><span className='profile-follow-count'>{followingNumber} Following</span></div>
          <div className='profile-photo-gallery'>
            <span className='profile-photo-gallery-heading'>PHOTOS</span>
          </div> */}
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

// class ProfilePage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       follow: false, 
//     }
//     this.toggleFollow = this.toggleFollow.bind(this);
//   }

//   componentDidMount() {
//     this.props.getUser(this.props.match.params.userId);
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     let follow = false;
//     if (nextProps.follows.followers && nextProps.session) {
//       follow = Object.values(nextProps.follows.followers).map(follow => follow.follower_id).includes(nextProps.session.id); 
//     }
//     return { follow }
//   }

//   toggleFollow(action) {
//     event.preventDefault();
//     if (action === "Unfollow") {
//       const follow = Object.values(this.props.follows.followers).filter(follower => follower.follower_id === this.props.session.id)[0];
//       this.props.unFollow(follow);
//     } else if (action === "Follow") {
//       const follow = {
//         follower_id: this.props.session.id,
//         followed_id: this.props.match.params.userId
//       }
//       this.props.postFollow(follow)
//     }
//   }

//   render() {
//     const photos = Object.values(this.props.photos).map(photo => (<PhotoIndexItem key={photo.id} photo={photo}/>));
//     const user = this.props.user[this.props.match.params.userId];
//     let userName, fName, lName, followingNumber, followerNumber;
//     if (user) {
//       followerNumber = user.follower_ids.length;
//       followingNumber = user.following_ids.length;
//       userName = user.username;
//       fName = user.fname;
//       lName = user.lname
//     }
//     const followButtonStatus = this.state.follow ? "Unfollow" : "Follow";
    
//     let followButton = document.getElementById("follow-button");
//     if (followButton) followButton.style.color = this.state.follow ? "green" : "red";

//     return (
//       <div className='main-content-box'>
//         <div className='profile-main-container'>
//           <span className='profile-username-display'>{userName}</span>
//           <span id="profile-follow-btn" onClick={() => this.toggleFollow(followButtonStatus)}>{followButtonStatus}</span>
//           <div className='profile-name-container'><div><h3>{fName}</h3></div><div><h3>{lName}</h3></div></div>
//           <div className='profile-follow-container'><span className='profile-follow-count'>{followerNumber} Followers</span><span className='profile-follow-count'>{followingNumber} Following</span></div>
//           <div className='profile-photo-gallery'>
//             <span className='profile-photo-gallery-heading'>PHOTOS</span>
//           </div>
//           <div className='profile-photos-container'>
//               {/* {photos} */}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

export default ProfilePage;