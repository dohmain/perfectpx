import React from 'react';

class OnboardingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      email: this.props.user.email,
      username: '',
      fname: '',
      lname: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let suggestedUsername = this.props.user.email.split('@')[0];
    this.setState({ username: suggestedUsername })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.update(this.state).then(() => this.props.history.push('/discover'));
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
                  onChange={this.handleInput('fname')}
                  required />
          </label>
          <label className='session-input-label'>Last Name 
          <br/>
            <input type="text" 
                    className='session-input-field' 
                    value={this.state.lname} 
                    onChange={this.handleInput('lname')}
                    required />
          </label>
          <label className='session-input-label'>Username 
          <br/>
            <input type="text" 
                    className='session-input-field' 
                    value={this.state.username} 
                    onChange={this.handleInput('username')}
                    required />
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