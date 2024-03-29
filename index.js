'use strict'

module.exports = (start, end) => {
  if (!start || !end) {
    throw new Error('Required arguments: startDate, endDate')
  }

  if (start > end) {
    throw new Error('End date cannot come before the start date')
  }

  const startDate = new Date(Date.parse(start)).toISOString().slice(0,10)

  const dates = [
    startDate
  ]

  var curDate = start

  while (curDate) {
    curDate = getNext(curDate)
    if (curDate && curDate <= end) {
      dates.push(curDate)
    } else {
      curDate = false
    }
  }

  return dates
}

function getNext (date) {
  const d0 = Date.parse(date)
  const d1 = d0 + (25 * 3600 * 1000)

  if (!isFinite(d1)) {
    throw new Error('Unrecognized date format. Try YYYY-MM-DD')
  }

  return new Date(d1).toISOString().slice(0,10)
}
