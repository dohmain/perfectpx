import React from 'react';
import TopNavContainer from './top_nav/top_nav_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from '../components/splash_page/splash_page'
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/signup_form/signup_form_container';
import OnboardingFormContainer from '../components/onboarding_form/onboarding_form_container';
import ProfilePageContainer from '../components/profile_page/profile_page_container';
import MyInformationContainer from '../components/my_information/my_information_container';

const App = () => (
  <div>
    <header className='top-nav-header'>
      <Route path='/' component={TopNavContainer} />
    </header>
    <Switch>
      <AuthRoute exact path='/' component={SplashPage} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <ProtectedRoute path='/onboarding' component={OnboardingFormContainer} />
      <ProtectedRoute exact path='/:username/my_information' component={MyInformationContainer} />
      <ProtectedRoute exact path='/:username' component={ProfilePageContainer} />
    </Switch>
  </div>
)

export default App;