import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUserLogin = this.demoUserLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`err.${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  demoUserLogin(e) {
    e.preventDefault()
    const demoUser = { email: 'demo@demo.com', password:'hunter2020' };
    this.props.action(demoUser);
  }

  render() {

    return (
      <div className='session-container'>
        <form className='session-form' 
              onSubmit={this.handleSubmit}>

          <h2>{this.props.formTitle}</h2>

          <label className='session-input-label'>Email or Username* 
            <br/>
            <input type="text" 
                  className='session-input-field' 
                  value={this.state.email} 
                  onChange={this.handleInput('email')} />
          </label>
          <label className='session-input-label'>Password* 
            <br/>
            <input type="password" 
                    className='session-input-field' 
                    value={this.state.password} 
                    onChange={this.handleInput('password')} />
          </label>
          <br/>

          <input type="submit" 
                 className='session-input-button' 
                 value={this.props.formType} />
          <br/>
          <input type="button" 
                  className='session-input-button' 
                  value='Continue as Demo user'
                  onClick={this.demoUserLogin} />
          <br/>
          <div>Don't have an account? <Link to='/signup' className='session-nav-link'>Sign Up</Link></div>
          <br/>         
        <div className='session-error-container'>
          {this.renderErrors()}
        </div>
        </form>
        <br/>
      </div>
    );
  }

}
export default SessionForm;