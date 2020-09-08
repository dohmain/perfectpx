import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
const defaultState = {};

export default (state = defaultState, action) => {
  Object.freeze(state);
  let allIds;
  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      allIds = Object.keys(action.comments);
      return Object.assign({}, state, action.comments, {allIds});

    case RECEIVE_CURRENT_USER:
      allIds = action.user.comments ? Object.keys(action.user.comments) : null;
      return Object.assign({}, state, action.user.comments, {allIds});

    case RECEIVE_COMMENT:
      allIds = state.allIds.push(action.comment.id);
      let newComment = state.byId[action.comment.id] = action.comment;
      return Object.assign({}, state, newComment, {allIds});

    case RECEIVE_PHOTO:
      allIds = action.comments ? Object.keys(action.comments.byId) : null;
      return Object.assign({}, state, action.comments, {allIds});
      
    default:
      return state;
  }
}