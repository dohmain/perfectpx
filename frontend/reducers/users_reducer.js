import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let allIds;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      allIds = {allIds: [action.user.id]}
      return Object.assign({}, state, { [action.user.id]: action.user }, allIds );

    case RECEIVE_USER_PROFILE:
      allIds = {allIds: [action.user.id]}
      return Object.assign({}, state, { [action.user.id]: action.user }, allIds );

    case RECEIVE_PHOTO:
      allIds = Object.keys(action.users.byId);
      return Object.assign({}, state, action.users, {allIds})

    case RECEIVE_ALL_PHOTOS:
      allIds = Object.keys(action.users.byId);
      return Object.assign({}, state, action.users, {allIds})

    default:
      return state;
  }
};

export default usersReducer;
