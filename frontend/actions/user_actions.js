import { getUser } from '../util/user_api_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

const receiveUserProfile = user => {
  debugger;
  return ({    
    type: RECEIVE_USER_PROFILE,
    user
  })
}

export const fetchUser = id => dispatch => getUser(id)
  .then(payload => dispatch(receiveUserProfile(payload)));