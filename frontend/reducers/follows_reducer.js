import { RECEIVE_FOLLOW, UNFOLLOW_USER } from '../actions/follow_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOW:
      let followId = Object.keys(action.follow.follows)[0]
      let newFollower = Object.assign({}, state, { [followId]: action.follow.follows});
      let newFollowers = {followers: Object.assign({}, state.followers, newFollower.followers[followId])};
      return Object.assign({}, state, newFollowers);
  
    case RECEIVE_USER_PROFILE:
      return Object.assign({}, action.user.follows);

    case UNFOLLOW_USER: 
      let newState = state;
      delete newState.followers[Object.keys(action.follow.follows.followers)];
      return Object.assign({}, newState);

    case RECEIVE_PHOTO:
      return Object.assign({}, state, action.photo.follows)
    default:
      return state;
  }
}

export default followsReducer;