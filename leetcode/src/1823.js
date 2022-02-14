/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const arr = []
  for (let i = 1; i < n + 1; i++) {
    arr.push(i)
  }
  while (arr.length !== 1) {
    let step = k
    while (step > 0) {
      arr.push(arr.shift())
      step -= 1
    }
    arr.pop()
  }
  return arr[0]
}
