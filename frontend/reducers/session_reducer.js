import { RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FOLLOW, UNFOLLOW_USER } from '../actions/follow_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {id: action.user.user.id});
      
    case LOGOUT_CURRENT_USER:
      return null;
      
    default:
      return state;
  }
};
