export const fetchComments = () => {
  return (
    $.ajax({
      url: `api/comments`
    })
  )
}

export const postComment = comment => {
  debugger
  return (
    $.ajax({
      url: `/api/comments`,
      method: 'POST',
      data: { comment }
    })
  )
}