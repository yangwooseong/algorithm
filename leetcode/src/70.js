/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let x = 1
  let y = 2

  while (n > 1) {
    const z = x
    x = y
    y += z
    n -= 1
  }

  return x
}
