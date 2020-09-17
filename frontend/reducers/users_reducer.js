import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let allIds;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});

    case RECEIVE_USER_PROFILE:
      debugger;
      return Object.assign({}, { [action.user.id]: action.user });

    case RECEIVE_PHOTO:
      debugger;
      return Object.assign({}, state, { [action.photo.user.id]: action.photo.user });

    // case RECEIVE_ALL_PHOTOS:
    //   debugger;
    //   allIds = Object.keys(action.users.byId);
    //   return Object.assign({}, state, action.users, {allIds})

    default:
      return state;
  }
};

export default usersReducer;
