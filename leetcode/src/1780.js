/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  while (n) {
    const r = n % 3
    n = Math.floor(n / 3)
    if (r >= 2) return false
  }
  return true
}
