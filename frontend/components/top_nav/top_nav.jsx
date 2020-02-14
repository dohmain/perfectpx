import React from 'react';
import { Link } from 'react-router-dom';
// import user from '../../../app/assets/images/user.png'

export default ({ currentUser, logout }) => {

  const handleDropdown = () => {
    return document.getElementById('userDropdown').classList.toggle('show');
  };

  window.onclick = function(event) {
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

  const display = currentUser ? (
    <>
      <div className='header-user-dropdown'>
        <img src={window.userHeaderIconURL} onClick={() => handleDropdown()} className='header-user-dropbtn header-user-icon' />
        <div id='userDropdown' className='header-user-dropdown-content'>
          <a className='dropdown-link'>Profile</a>
          <a className='dropdown-link'>Settings</a>
          <br/>
          <a className='dropdown-link' onClick={logout}>Log out</a>
        </div>
      </div>
      {/* <img className='header-user-icon' src='/assets/user.png' /> */}
      <Link to='/' className='header-upload-button'>Upload</Link>
    </>
  ) : (
    <>
      <Link to='/login' className='header-login-button'>Log In</Link>
      <Link to='/signup' className='header-signup-button'>Sign Up</Link> 
    </>
  )

  return (
    <div className='top-nav-container'>
      <div className='nav-logo'>
        <Link to='/' className='logo-link'>PERFECTpx</Link>
      </div>
      <div className='top-nav-right'>
        {display}
      </div>
    </div>
  )
}