/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0
  let right = s.length - 1
  while (left <= right) {
    if (s[left] === s[right]) {
      left += 1
      right -= 1
    } else {
      const leftArr = s.slice(left, right)
      const rightArr = s.slice(left + 1, right + 1)
      return (
        leftArr === leftArr.split('').reverse().join('') ||
        rightArr === rightArr.split('').reverse().join('')
      )
    }
  }
  return true
}

console.log(validPalindrome('abc'))
