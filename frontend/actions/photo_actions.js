import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

const receiveAllPhotos = payload => {
  const { photos, users } = payload;
  return ({
    type: RECEIVE_ALL_PHOTOS,
    photos,
    users
  })
};

const receivePhoto = payload => {
  const { photos, users, comments} = payload;
  return ({
    type: RECEIVE_PHOTO,
    photos, 
    users, 
    comments
  })
};

export const getPhotos = () => dispatch => PhotoAPIUtil.fetchPhotos()
  .then(photos => dispatch(receiveAllPhotos(photos)))

export const getPhoto = (id) => dispatch => PhotoAPIUtil.fetchPhoto(id)
  .then(payload => dispatch(receivePhoto(payload)))

export const postPhoto = (formData) => dispatch => PhotoAPIUtil.postPhoto(formData)
  .then(photo => dispatch(receivePhoto(photo)));