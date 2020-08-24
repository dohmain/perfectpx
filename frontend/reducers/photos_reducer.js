import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';

const defaultState = {};

export default (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_PHOTOS:
      return action.photos

    case RECEIVE_PHOTO:
      debugger
      return Object.assign({}, state, action.photos)

    case RECEIVE_USER_PROFILE:
      return Object.assign({}, state, action.user.photos)

    default:
      return state;
  }
}