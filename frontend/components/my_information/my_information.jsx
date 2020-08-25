import React from 'react';

class MyInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      email: this.props.user.email,
      username: this.props.user.username,
      fname: this.props.user.fname,
      lname: this.props.user.lname,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.update(this.state).then(() => this.props.history.push(`/users/${this.props.user.id}`));
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  render() {
    return(
      <div className='session-container'>
        <form className='personal-information-form'
              onSubmit={this.handleSubmit}>
          <h3>Personal</h3>
          <label className='personal-info-input-label'>Username
          <br/>
          <br/>
            <input type='text'
                  className='personal-info-input-field' 
                  value={this.state.username} 
                  placeholder="Username"
                  readOnly />
          </label>
          <label className='personal-info-input-label'>Email
          <br/>
          <br/>
            <input type='email'
                  className='personal-info-input-field' 
                  value={this.state.email} 
                  onChange={this.handleInput('email')}
                  placeholder='Email'
                  required />
          </label>
          <label className='personal-info-input-label'>First name
          <br/>
          <br/>
            <input type='text'
                  className='personal-info-input-field' 
                  value={this.state.fname} 
                  onChange={this.handleInput('fname')}
                  placeholder='First name'
                  required />
          </label>
          <label className='personal-info-input-label'>Last name
          <br/>
          <br/>
            <input type='text'
                  className='personal-info-input-field' 
                  value={this.state.lname} 
                  onChange={this.handleInput('lname')}
                  placeholder='Last name'
                  required />
          </label>
          <br/>
          <div className='personal-info-submit-container'>
            <input type="submit" 
                  className='session-input-button profile-save-button' 
                  value='Save Changes' />
            <br/>
          </div>
        </form>
      </div>
    )
  }
}

export default MyInformation;