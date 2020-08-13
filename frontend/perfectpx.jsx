import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// for testing
import { signup, login, logout } from './util/session_api_util';
// ...........

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState;
  
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { 
        id: window.currentUser.id 
      }
    };
  }
    
  delete window.currentUser;
  const store = configureStore(preloadedState);
  

  // for testing
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // ...........

  ReactDOM.render(<Root store={store} />, root);
});