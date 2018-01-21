const dateRangeArr = require('./')

var example1 = dateRangeArr('2017-12-20', '2018-01-27')

// console.log('dates ', '2017-12-20 to 2018-01-27', example1)

var example2 = dateRangeArr('2018-01-13T17:00:00.000Z', '2018-01-21T16:59:59.000Z')

console.log('dates ', '2018-01-13T17:00:00.000Z to 2018-01-21T16:59:59.000Z', example2)
