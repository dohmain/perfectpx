import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

const receiveAllPhotos = photos => {
  return ({
    type: RECEIVE_ALL_PHOTOS,
    photos
  })
};

const receivePhoto = photo => {
  return ({
    type: RECEIVE_PHOTO,
    photo
  })
};

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  })
};

export const getPhotos = () => dispatch => PhotoAPIUtil.fetchPhotos()
  .then(photos => dispatch(receiveAllPhotos(photos)))

export const getPhoto = (id) => dispatch => PhotoAPIUtil.fetchPhoto(id)
  .then(photo => dispatch(receivePhoto(photo)))

export const postPhoto = (photo) => dispatch => PhotoAPIUtil.postPhoto(photo)
  .then(photo => dispatch(receivePhoto(photo)), error => dispatch(receiveErrors(error.responseJSON)));