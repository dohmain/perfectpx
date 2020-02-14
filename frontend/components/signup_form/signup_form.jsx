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
    e.preventDefault();
    this.props.action(this.state);
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
        <input type="submit" 
            className='session-input-button' 
            value='Continue as Demo user' />
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
        <span>Try out the <Link to='/'>Demo</Link></span>
        <br/>
        <div><span id='formhr'>or</span></div>
        <label className='session-input-label'>Email* 
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


// import React from 'react';
// import { Link } from 'react-router-dom';

// class SignupForm extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.action(this.state);
//   }

//   handleInput(field) {
//     return (e) => {
//       this.setState({ [field]: e.target.value });
//     }
//   }

//   renderErrors() {
//     return (
//       <ul>
//         {this.props.errors.map((error) => (
//           <li>{error}</li>
//         ))}
//       </ul>
//     )
//   }

//   viewStatus() {
//     debugger
    
//   }

//   render () {
//     const signupFormstat = this.props.viewForm === true ? (

//       <form className='session-form' 
//             onSubmit={this.handleSubmit}>
//         <br/>
//         <span>Try out the <Link to='/'>Demo</Link></span>
//         <br/>
//         <div><span id='formhr'>or</span></div>
//         <label className='session-input-label'>Email* 
//             <br/>
//             <input type="text" 
//                   className='session-input-field' 
//                   value={this.state.email} 
//                   onChange={this.handleInput('email')} />
//           </label>
//           <label className='session-input-label'>Password* 
//             <br/>
//             <input type="password" 
//                     className='session-input-field' 
//                     value={this.state.password} 
//                     onChange={this.handleInput('password')} />
//           </label>
//           <br/>
//           <div>
//           Already have an account? <Link to='/login' className='session-nav-link'>Log In</Link>
//         </div>
//         <br/>
//       </form>

//     ) : (
//       <div className='session-form'>
//         <h2>{this.props.formTitle}</h2>

//         <span className='signup-text'>Discover and share incredible photos, gain global exposure, and get paid for your work.</span>
//         <br/>
//         <input type="button" 
//             className='session-input-button' 
//             value='Continue with Email'
//             onClick={() => this.viewStatus()} />
//         <br/>
//         <input type="submit" 
//             className='session-input-button' 
//             value='Continue as Demo user' />
//         <br/>
//         <div>
//           Already have an account? <Link to='/login' className='session-nav-link'>Log In</Link>
//         </div>
//         <br/>     
//       </div>    
//     );

//     return (
//       <div className='session-container'>{signupFormstat}</div>
//     )
//   }
// }



// export default SignupForm;