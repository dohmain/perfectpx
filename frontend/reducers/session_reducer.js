import { RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FOLLOW, UNFOLLOW_USER } from '../actions/follow_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.user.user);
      
    case LOGOUT_CURRENT_USER:
      return {};

    case RECEIVE_FOLLOW:
      return state;
      // update with reference to new follow

    case UNFOLLOW_USER: 
      return state;
      // delete the follow referece from old state and return new state

    case RECEIVE_PHOTO: 
      return state;
      // update with reference to new photo
      
    default:
      return state;
  }
};
