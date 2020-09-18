import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const defaultState = {};

export default (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_PHOTOS:
      return Object.assign({}, state, action.photos)

    case RECEIVE_PHOTO:
      return Object.assign({}, {[action.photo.photo.id]: action.photo.photo})

    case RECEIVE_USER_PROFILE:
      return Object.assign({}, action.user.photos,)

    // case RECEIVE_COMMENT:
      // i dont think i need this

    default:
      return state;
  }
}