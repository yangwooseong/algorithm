/**
 * @param {string} palindrome
 * @return {string}
 */

var breakPalindrome = function (palindrome) {
  if (palindrome.length === 1) return ''
  const arr = palindrome.split('')
  if (arr.filter((char) => char !== 'a').length === 0) {
    return palindrome.slice(0, 1) + 'b' + palindrome.slice(2)
  } else {
    const firstNonAIdx = arr.findIndex((val) => val !== 'a')
    const tmp = arr[firstNonAIdx]
    arr[firstNonAIdx] = 'a'
    if (arr.filter((char) => char !== 'a').length === 0) {
      arr[firstNonAIdx] = tmp
      arr[arr.length - 1] = 'b'
    }
    return arr.join('')
  }
}

console.log(breakPalindrome('aba'))
