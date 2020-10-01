import React from 'react';
import Dropdown from './dropdown';

class TopNav extends React.Component {

  render() {

    return (
      <div id='header-container'>
        <div id='header-left-container'>
          <div id='header-logo'>
            PERFECTpx
          </div>
          <div id='header-links'>
            <div className='header-link'>
              Discover
            </div>
            <div className='header-link'>
              LinkedIn            
            </div>
            <div className='header-link'>
              Github
            </div>
          </div>
        </div>
        <div id='header-right-container'>
          <div className='header-link' id='header-user-button'>
            <Dropdown user={this.props.currentUser} logout={this.props.logout}/>
          </div>
          <div className='header-link' id="header-upload-button">
            {this.props.currentUser ? "Upload" : "Sign Up"}
          </div>
        </div>
      </div>
    )
  }
}

export default TopNav;