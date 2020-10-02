import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';

class TopNav extends React.Component {

  render() {
    const upButton = this.props.currentUser ? <Link to='/upload'><i className="fas fa-arrow-up"></i> Upload</Link> : <Link to='/signup'>Sign Up</Link>;
    return (
      <div id='header-container'> 
        <div id='header-left-container'>
          <div id='header-logo'>
            <Link to ='/'>PERFECT<sup>px</sup></Link>
          </div>
          <div id='header-links'>
            <div className='header-link'>
              <Link to='/discover'>Discover</Link>
            </div>
            <div className='header-link'>
              <a href='https://www.linkedin.com' target='_blank'>LinkedIn</a>
            </div>
            <div className='header-link'>
              <a href='https://www.github.com' target='_blank'>Github</a>
            </div>
          </div>
        </div>
        <div id='header-right-container'>
          <div className='header-link' id='header-user-button'>
            <Dropdown user={this.props.currentUser} logout={this.props.logout}/>
          </div>
          <div className='header-link' id="header-upload-button">
            {upButton} 
          </div>
        </div>
      </div>
    )
  }
}

export default TopNav;