// export const fetchFollows = () => {
//   return (
//     $.ajax({
//       url: `api/follows`
//     })
//   )
// }

export const postFollow = follow => {
  return (
    $.ajax({
      url: `/api/users/${follow.follower_id}/follows`,
      method: 'POST',
      data: { follow }
    })
  )
}

export const unFollow = follow => {
  return (
    $.ajax({
      url: `/api/users/${follow.follower_id}/follows/${follow.id}`,
      method: 'DELETE'
    })
  )
}