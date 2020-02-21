import { getUser } from '../util/user_api_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

const receiveUserProfile = payload => {
  const { users, photos } = payload;
  return ({    
    type: RECEIVE_USER_PROFILE,
    users,
    photos
  })
}

export const fetchUser = id => dispatch => getUser(id)
  .then(payload => dispatch(receiveUserProfile(payload)));