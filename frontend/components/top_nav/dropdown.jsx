import React from 'react';
import { Link } from 'react-router-dom';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.user ? true : false,
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.setState({
        loggedIn: this.props.user ? true : false,
        open: false
      });
    }
  }

  handleClick() {
    if (!this.state.open) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState(prevState => ({open: !prevState.open}));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return; 
    }
    this.handleClick();
  }

  handleLogout() {
    this.setState({loggedIn: false});
    this.props.logout();
  }

  render() {
    const headerMenu = this.state.loggedIn ? (
      <div>
        <div className="dropdown" id="dropdown" ref={node => { this.node = node; }}>
          <img src={window.userHeaderIconURL} onClick={this.handleClick} className='header-user-dropbtn header-user-icon' />
          {this.state.open && (
            <div className="dropdown-menu">
              <ul>
                <li className ='dropdown-link-li'><Link to={`/users/${this.props.user.id}`} className='dropdown-link'>Profile</Link></li>
                {/* <li><Link to={`/users/${this.props.user.id}/my_information`} className='dropdown-link'>Settings</Link></li> */}
                <li className ='dropdown-link-li'><Link to={`/`} className='dropdown-link' onClick={this.handleLogout}>Log out</Link></li>
                {/* <li><Link to={`/`} className='dropdown-link' onClick={this.props.logout}>Log out</Link></li> */}
              </ul>
            </div>
          )}
        </div>
      </div>
    ) : (
      <div className='header-link'><Link to='/login' id='header-login-button'>Log In</Link></div>
    )

    return (
      <>{headerMenu}</>
      
    );
  }
}

export default Dropdown;