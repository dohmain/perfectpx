import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const defaultState = {};

export default (state = defaultState, action) => {
  Object.freeze(state);
  let allIds;
  switch(action.type) {
    case RECEIVE_ALL_PHOTOS:
      return Object.assign({}, state, action.photos)

    case RECEIVE_PHOTO:
      return Object.assign({}, {[action.photo.photo.id]: action.photo.photo})

    // case RECEIVE_USER_PROFILE:
    //   allIds = Object.keys(action.user.photos)
    //   return Object.assign({}, state, action.user.photos, {allIds})

    // case RECEIVE_COMMENT:
    //   let newState = state;
    //   newState.byId[action.comment.photo_id].comment_ids.push(action.comment.id);
    //   return Object.assign({}, state, newState)

    default:
      return state;
  }
}