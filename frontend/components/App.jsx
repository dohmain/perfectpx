import React from 'react';
import NavContainer from './greeting/nav_container';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className='top-nav-header'>
      <Route path='/' component={NavContainer} />
    </header>
    <Switch>
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
    </Switch>
  </div>
)

export default App;