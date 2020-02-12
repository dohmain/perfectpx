import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }
  
  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    const navLink = this.props.path === '/login' ? (
      <>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </>
    ) : (
      <>
        Already have an account? <Link to='/login'>Log In</Link>
      </>
    );

    const idField = this.props.path === '/login' ? (
      <>
        <label className='session-input-label'>Username* 
          <br/>
          <input type="text"  className='session-input-field' value={this.state.username} onChange={this.handleInput('username')}/>
        </label>
      </>
    ) : (
      <>
        <label className='session-input-label'>Username* 
          <br/>
          <input type="text"  className='session-input-field' value={this.state.username} onChange={this.handleInput('username')}/>
        </label>
        <label className='session-input-label'>Email* 
          <br/>
          <input type="text"  className='session-input-field' value={this.state.email} onChange={this.handleInput('email')}/>
        </label>
      </>
    );

    return (
      <div className='session-container'>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <h2>{this.props.formTitle}</h2>
          {idField}
          <label className='session-input-label'>Password* 
            <br/>
            <input type="password"  className='session-input-field' value={this.state.password} onChange={this.handleInput('password')}/>
          </label>
          <br/>
          <input type="submit" className='session-input-button' value={this.props.formType} />
          <br/>
          <div>{navLink}</div>
          <br/>
        </form>
        
      </div>
    );
  }
}
export default SessionForm;