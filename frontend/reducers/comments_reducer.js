import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
const defaultState = {};

export default (state = defaultState, action) => {
  Object.freeze(state);
  debugger
  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return Object.assign({}, state, action.comments)

    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { comments: action.user.comments })

    case RECEIVE_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment })

    case RECEIVE_PHOTO:
      return Object.assign({}, state, action.comments)
      
    default:
      return state;
  }
}