import React from 'react';
import TopNavContainer from './top_nav/top_nav_container';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/signup_form/signup_form_container';
import OnboardingFormContainer from '../components/onboarding_form/onboarding_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from '../components/splash_page/splash_page'

const App = () => (
  <div>
    <header className='top-nav-header'>
      <Route path='/' component={TopNavContainer} />
    </header>
      <AuthRoute exact path='/' component={SplashPage} />
    <Switch>
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <ProtectedRoute path='/onboarding' component={OnboardingFormContainer} />
    </Switch>
  </div>
)

export default App;