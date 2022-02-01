/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let cur = 0
  let next = 1
  let nNext = 1
  let temp1, temp2
  while (n) {
    temp1 = cur
    cur = next
    next = nNext
    nNext += temp1 + cur
    n -= 1
  }
  return cur
}
