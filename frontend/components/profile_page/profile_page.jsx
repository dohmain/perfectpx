import React from 'react';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      email: this.props.user.email,
      username: this.props.user.username,
      fname: this.props.user.fname,
      lname: this.props.user.lname,
    }
  }

  render() {
    return (
      <div className='main-content-box'>
        <div className='profile-main-container'>
          <span className='profile-username-display'>{this.state.username}</span>
          <div className='profile-name-container'><div><h3>{this.state.fname}</h3></div><div><h3>{this.state.lname}</h3></div></div>
          <div className='profile-follow-container'><span className='profile-follow-count'># Followers</span><span className='profile-follow-count'># Following</span></div>
          <div className='profile-photo-gallery'>
            <span className='profile-photo-gallery-heading'>PHOTOS</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage;