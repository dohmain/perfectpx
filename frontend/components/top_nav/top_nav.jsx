import React from 'react';
import { Link } from 'react-router-dom';


class TopNav extends React.Component {
  constructor(props){
    super(props);
  }

  onclick(event) {
    if (!event.target.matches('.header-user-dropbtn')) {
      let dropdowns = document.getElementsByClassName('header-user-dropdown-content');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  handleDropdown() {
    return document.getElementById('userDropdown').classList.toggle('show');
  };

  render() {
    const right_nav = this.props.currentUser ? (
      <>
        <div className='header-user-dropdown'>
          <img src={window.userHeaderIconURL} onClick={() => this.handleDropdown()} className='header-user-dropbtn header-user-icon' />
          <div id='userDropdown' className='header-user-dropdown-content'>
            <Link to={`/users/${this.props.currentUser.id}`} className='dropdown-link'>Profile</Link>
            <Link to={`/users/${this.props.currentUser.id}/my_information`} className='dropdown-link'>Settings</Link>
            <br/>
            <a className='dropdown-link' onClick={this.props.logout}>Log out</a>
          </div>
        </div>
        <Link to='/upload' className='header-upload-button'>Upload</Link>
      </>
    ) : (
      <>
        <Link to='/login' className='header-login-button'>Log In</Link>
        <Link to='/signup' className='header-signup-button'>Sign Up</Link> 
      </>
    )
  
    return (
      <div className='top-nav-container'>
        <div className='top-nav-logo-link-container'>
          <div className='logo-link-container'>
            <Link to='/' className='logo-link'>PERFECTpx</Link>
            </div>
          <div className='top-nav-link-container'>
            <Link to='/discover' className='top-nav-link'>Discover</Link>
            <a href='https://www.linkedin.com/in/joe-doh/' className='top-nav-link'>LinkedIn</a>
            <a href='https://github.com/dohmain' className='top-nav-link'>Github</a>
          </div>
        </div>
        <div className='top-nav-right'>
          {right_nav}
        </div>
      </div>
    )
  }
}

export default TopNav;