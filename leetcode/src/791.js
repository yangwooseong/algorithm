/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const constructOrderObj = () => {
    const obj = {}
    for (let i = 0; i < order.length; i++) {
      obj[order[i]] = i
    }
    return obj
  }
  const orderObj = constructOrderObj()
  return s
    .split('')
    .sort((a, b) => {
      if (orderObj[a] && orderObj[b]) return orderObj[a] - orderObj[b]
      else if (orderObj[a] && !orderObj[b]) return 1
      else if (!orderObj[a] && orderObj[b]) return -1
      else return -1
    })
    .join('')
}
