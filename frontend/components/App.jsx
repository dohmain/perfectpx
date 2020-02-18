import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import TopNavContainer from './top_nav/top_nav_container';
import SplashPage from '../components/splash_page/splash_page'
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/signup_form/signup_form_container';
import OnboardingFormContainer from '../components/onboarding_form/onboarding_form_container';
import ProfilePageContainer from '../components/profile_page/profile_page_container';
import MyInformationContainer from '../components/my_information/my_information_container';
import PhotoGalleryContainer from '../components/photo_gallery/photo_gallery_container';
import PhotoShowContainer from '../components/photo_gallery/photo_show_container';
import PhotoFormContainer from '../components/photo_gallery/photo_form_container';

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
      <ProtectedRoute path='/upload' component={PhotoFormContainer} />
      <Route exact path='/discover' component={PhotoGalleryContainer} />
      <Route exact path='/photo/:photoId' component={PhotoShowContainer} />
      <ProtectedRoute exact path='/:username/my_information' component={MyInformationContainer} />
      <ProtectedRoute exact path='/:username' component={ProfilePageContainer} />
    </Switch>
  </div>
)

export default App;