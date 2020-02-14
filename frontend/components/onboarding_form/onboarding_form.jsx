import React from 'react';
import { Link } from 'react-router-dom';

class OnboardingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.user.email,
      username: '',
      fname: '',
      lname: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.update(this.state);
  }
  
  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    return (
      <div className='session-container'>
        <form className='session-form' 
              onSubmit={this.handleSubmit}>

          <h2>Welcome to perfectpx.</h2>
          <h2>Let's get to know you a little.</h2>

          <label className='session-input-label'>First Name
          <br/>
            <input type="text" 
                  className='session-input-field' 
                  value={this.state.fname} 
                  onChange={this.handleInput('fname')} />
          </label>
          <label className='session-input-label'>Last Name 
          <br/>
            <input type="text" 
                    className='session-input-field' 
                    value={this.state.lname} 
                    onChange={this.handleInput('lname')} />
          </label>
          <label className='session-input-label'>Username 
          <br/>
            <input type="text" 
                    className='session-input-field' 
                    value={this.state.username} 
                    onChange={this.handleInput('username')} />
          </label>
          <br/>

          <input type="submit" 
                 className='session-input-button' 
                 value='Next' />
          <br/>
       
        </form>
        <br/>
      </div>
    )
  }
}

export default OnboardingForm;