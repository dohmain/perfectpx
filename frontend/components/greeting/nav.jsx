import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {

  const display = currentUser ? (
    <>
      <span className='user-greet'>Hello, {currentUser.username}</span>
      <button onClick={logout}>Log Out</button>
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
        <Link to='/' className='logo-link'>PERFECTpx this is the change</Link>
      </div>
      <div className='top-nav-right'>
        {display} 
      </div>
    </div>
  )
}