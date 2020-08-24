export const fetchPhotoComments = (state, photo) => {
  return photo.comment_ids ? photo.comment_ids.map(id => state.entities.comments[id]) : [];
}

export const fetchUserPhotos = (state, user) => {
  if (user === false || state.entities.photos.length === 0) {
    return [];
  } else if (user.photo_ids) {
    return user.photo_ids.map(id => state.entities.photos[id]);
  } else {
    return []
  }
}

export const getRandomPhoto = (photos) => {
  return photos[Object.keys(photos)[Math.floor((Math.random()*Object.keys(photos).length))]]
  // console.log(photos[Object.keys(photos)[Math.floor((Math.random()*Object.keys(photos).length))]])
}