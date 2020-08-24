import React from 'react';
import { Link } from 'react-router-dom';

// const TopNav = ({ currentUser, logout }) => {

//     return (
//       <div className='top-nav-container'>
//         <div className='top-nav-logo-link-container'>
//           <div className='logo-link-container'>
//             <Link to='/' className='logo-link'>PERFECTpx</Link>
//             </div>
//           <div className='top-nav-link-container'>
//             <Link to='/discover' className='top-nav-link'>Discover</Link>
//             <a href='#' className='top-nav-link'>LinkedIn</a>
//             <a href='#' className='top-nav-link'>Github</a>
//           </div>
//         </div>
//         <div className='top-nav-right'>
//           {/* {right_nav} */}
//           {currentUser}
//         </div>
//       </div>
//     )

// }


class TopNav extends React.Component {
  constructor(props){
    super(props);
    // this.currentUser = this.props.currentUser;
    // this.onclick = this.onclick.bind(this);
    // this.handleDropdown = this.handleDropdown.bind(this);

    // this.forceUpdate = this.forceUpdate.bind(this);
    // require this component to re-render whenever the store's state changes
    // this.props.store.subscribe(this.forceUpdate);
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
            <Link to={`/users/${this.props.currentUser}`} className='dropdown-link'>Profile</Link>
            <Link to={`/users/${this.props.currentUser}/my_information`} className='dropdown-link'>Settings</Link>
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
            <a href='#' className='top-nav-link'>LinkedIn</a>
            <a href='#' className='top-nav-link'>Github</a>
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