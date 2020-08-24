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
  // return user.photo_ids ? user.photo_ids.map(id => state.entities.photos[id]) : [];
}

// export const fetchPhotoComments = (state, photo) => {
//   if (photo === false || state.entities.comments.length === 0) {
//     return[];
//   } else if (photo.comment_ids) {
//     return photo.comment_ids.map(id => state.entities.comments[id]);
//   } else {
//     return []
//   }
// }