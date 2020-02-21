export const fetchPhotoComments = (state, photo) => {
  return photo.comment_ids ? photo.comment_ids.map(id => state.entities.comments[id]) : [];
}

export const fetchUserPhotos = (state, user) => {
  if (!user) {
    return []
  };
  return user.photo_ids ? user.photo_ids.map(id => state.entities.photos[id]) : [];
}