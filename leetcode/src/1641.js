/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let arr = new Array(5).fill(1)
  while (n > 1) {
    let newArr = new Array(5)
    let cur = 0
    for (let i = 4; i > -1; i--) {
      cur += arr[i]
      newArr[i] = cur
    }
    arr = newArr
    n -= 1
    // console.log(arr.slice())
  }
  return arr.reduce((a, b) => a + b)
}
