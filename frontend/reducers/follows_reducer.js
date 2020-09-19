import { RECEIVE_FOLLOW, UNFOLLOW_USER } from '../actions/follow_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOW:
      return Object.assign({}, state, action.follow.follows);
  
    case RECEIVE_USER_PROFILE:
      return Object.assign({}, action.user.follows);

    case UNFOLLOW_USER: 
      return state;
      // delete the follow referece from old state and return new state
    default:
      return state;
  }
}

export default followsReducer;