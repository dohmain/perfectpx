import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_FOLLOW, UNFOLLOW_USER } from '../actions/follow_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {[action.user.id]: action.user});

    case RECEIVE_USER_PROFILE:
      return Object.assign({}, { [action.user.user.id]: action.user.user });

    case RECEIVE_PHOTO:
      return Object.assign({}, { [action.photo.user.id]: action.photo.user });

    case RECEIVE_ALL_PHOTOS: 
      return Object.assign({}, state, action.photos.users );

    case RECEIVE_FOLLOW:
      return Object.assign({}, state, {[action.follow.user.id]: action.follow.user})

    case UNFOLLOW_USER: 
    debugger;
      return Object.assign({}, state, {[action.follow.user.id]: action.follow.user})

    default:
      return state;
  }
};

export default usersReducer;
