import React from 'react';
import TopNavContainer from './top_nav/top_nav_container';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/signup_form/signup_form_container';
import OnboardingFormContainer from '../components/onboarding_form/onboarding_form_container'
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className='top-nav-header'>
      <Route path='/' component={TopNavContainer} />
    </header>
    <Switch>
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <Route path='/onboarding' component={OnboardingFormContainer} />
    </Switch>
  </div>
)

export default App;