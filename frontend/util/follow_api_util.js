export const fetchFollows = () => {
  return (
    $.ajax({
      url: `api/follows`
    })
  )
}

export const postFollow = follow => {
  return (
    $.ajax({
      url: `/api/follows`,
      method: 'POST',
      data: { follow }
    })
  )
}