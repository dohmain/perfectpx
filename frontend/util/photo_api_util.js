export const postPhoto = photo => {
  return (
    $.ajax({
      url: `/api/photos`,
      method: 'POST',
      data: { photo }
    })
  )
}

export const fetchPhotos = () => {
  return (
    $.ajax({
      url: `api/photos`
    })
  )
}

export const fetchPhoto = photoId => {
  return (
    $.ajax({
      url: `api/photos/${photoId}`
    })
  )
}

export const updatePhoto = photo => {
  return (
    $.ajax({
      url: `/api/photos/${photo.id}`,
      method: `PATCH`,
      data: { photo }
    })
  )
}