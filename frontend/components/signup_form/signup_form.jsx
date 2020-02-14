import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      selectedPane: 0
    };
    this.selectTab = this.selectTab.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUserLogin = this.demoUserLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  selectTab(num) {
    this.setState({selectedPane: num});
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/onboarding'));
  }

  renderErrors() {
    return (
      <ul className='session-error-list'>
        {this.props.errors.map((error, i) => (
          <li key={`err.${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  demoUserLogin(e) {
    e.preventDefault()
    const demoUser = { email: 'demo@demo.com', password:'hunter2020' };
    this.props.login(demoUser);
  }

  render() {

    const pane = this.state.selectedPane === 0 ? (

      <div className='session-form'>
        <h2>{this.props.formTitle}</h2>

        <span className='signup-text'>Discover and share incredible photos, gain global exposure, and get paid for your work.</span>
        <br/>
        <input type="button" 
            className='session-input-button' 
            value='Continue with Email'
            onClick={() => this.selectTab(1)} />
        <br/>
        <input type="button" 
            className='session-input-button' 
            value='Continue as Demo user'
            onClick={this.demoUserLogin} />
        <br/>
        <div>
          Already have an account? <Link to='/login' className='session-nav-link'>Log In</Link>
        </div>
        <br/>     
      </div>   
    ) : (
      <form className='session-form' 
            onSubmit={this.handleSubmit}>
        <br/>
        <span>Try out the <Link to='/' onClick={this.demoUserLogin} >Demo</Link></span>
        <br/>
        <div><span id='formhr'>or</span></div>
        <label className='session-input-label'>Email* 
            <br/>
            <input type="email" 
                  className='session-input-field' 
                  value={this.state.email} 
                  onChange={this.handleInput('email')} />
          </label>
          <label className='session-input-label'>Password* 
            <br/>
            <input type="password" 
                    className='session-input-field' 
                    value={this.state.password} 
                    onChange={this.handleInput('password')}
                    placeholder='(minimum 8 characters)' />
          </label>
          <div className='session-error-container'>
          {this.renderErrors()}
          </div>
          <br/>
          <input type="submit" 
            className='session-input-button' 
            value={this.props.formType} />
        <br/>
          <div>
          Already have an account? <Link to='/login' className='session-nav-link'>Log In</Link>
        </div>
        <br/>

      </form>
    )

    return (
      <div className='session-container'>{pane}</div>
    )
  }
}

export default SignupForm;