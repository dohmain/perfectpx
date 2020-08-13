import React from 'react';
import { withRouter } from 'react-router';
import PhotoIndexItem from '../../components/photo_gallery/photo_index_item';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userId);
    this.props.getPhotos();
  }
  
  render() {
    debugger;
    const photos = this.props.photos.map(photo => (
      <PhotoIndexItem key={photo.id} photo={photo}/>
    ))
    return (
      <div className='main-content-box'>
        <div className='profile-main-container'>
          <span className='profile-username-display'>{this.props.currentUser.username}</span>
          <div className='profile-name-container'><div><h3>{this.props.currentUser.fname}</h3></div><div><h3>{this.props.currentUser.lname}</h3></div></div>
          {/* <div className='profile-follow-container'><span className='profile-follow-count'># Followers</span><span className='profile-follow-count'># Following</span></div> */}
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

export default withRouter(ProfilePage);