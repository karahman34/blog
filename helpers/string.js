export function getCreatedTime(createdAt) {
  const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const date = new Date(createdAt)

  return `${date.toLocaleDateString()} - ${weekDay[date.getDay()]}`
}

export function getArticleImagePath(imageName) {
  return `/articles/${imageName}`
}
