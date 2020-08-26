import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';

const receiveAllFollows = follows => {
  return {
    type: RECEIVE_ALL_FOLLOWS,
    follows 
  }
};

const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow 
  }
}

export const getFollows = () => dispatch => FollowAPIUtil.fetchFollows()
  .then(follows => dispatch(receiveAllFollows(follows)))

export const postFollow = (follow) => dispatch => FollowAPIUtil.postFollow(follow)
  .then(follow => dispatch(receiveFollow(follow)))