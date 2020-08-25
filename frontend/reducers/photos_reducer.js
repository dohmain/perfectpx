import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

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

    case RECEIVE_COMMENT:
      debugger
      let newState = state;
      newState[action.comment.photo_id].comment_ids.push(action.comment.id);
      return Object.assign({}, state, newState)

    default:
      return state;
  }
}