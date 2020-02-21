import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveAllComments = comments => {
  return ({
    type: RECEIVE_ALL_COMMENTS, 
    comments
  })
};

const receiveComment = comment => {
  return ({
    type: RECEIVE_COMMENT,
    comment
  })
};

const receiveCommentErrors = error => {
  return ({
    type: RECEIVE_COMMENT_ERRORS,
    error
  })
}

export const clearErrors = () => {
  return ({ type: CLEAR_ERRORS })
};

export const getComments = () => dispatch => CommentAPIUtil.fetchComments()
  .then(comments => dispatch(receiveAllComments(comments)), error => dispatch(receiveCommentErrors(error.responseJSON)))

export const postComment = (comment) => dispatch => CommentAPIUtil.postComment()
  .then(comment => dispatch(receiveComment(comment)), error => dispatch(receiveCommentErrors(error.responseJSON)))