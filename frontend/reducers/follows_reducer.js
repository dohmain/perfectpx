import { RECEIVE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOW:
      debugger;
      return Object.assign({}, state, {[action.follow.follow.id]: action.follow.follow});
  
    case RECEIVE_USER_PROFILE:
      return Object.assign({}, action.user.follows);

    default:
      return state;
  }
}

export default followsReducer;