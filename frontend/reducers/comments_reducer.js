import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions'
const defaultState = {};

export default (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PHOTO:
      return Object.assign({}, action.photo.comments);

    case RECEIVE_COMMENT:
      return Object.assign({}, state, {[action.comment.comment.id]: action.comment.comment});
      
    default:
      return state;
  }
}