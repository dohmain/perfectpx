import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {[action.user.id]: action.user});

    case RECEIVE_USER_PROFILE:
      debugger;
      return Object.assign({}, { [action.user.user.id]: action.user.user });

    case RECEIVE_PHOTO:
      return Object.assign({}, { [action.photo.user.id]: action.photo.user });

    default:
      return state;
  }
};

export default usersReducer;
