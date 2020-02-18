import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';

const defaultState = {};

export default (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_PHOTOS:
      return action.photos

    case RECEIVE_PHOTO:
      return Object.assign({}, state, {[action.photo.id]: action.photo})

    default:
      return state;
  }
}