import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';

const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow 
  }
}

const unFollowUser = (follow) => {
  debugger;
  return {
    type: UNFOLLOW_USER,
    follow
  }
}

export const unFollow = (follow) => dispatch => FollowAPIUtil.unFollow(follow)
  .then((follow) => dispatch(unFollowUser(follow)))

export const postFollow = (follow) => dispatch => FollowAPIUtil.postFollow(follow)
  .then(follow => dispatch(receiveFollow(follow)))