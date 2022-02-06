/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c, aa = 'a', bb = 'b', cc = 'c') {
  // console.log(a, b, c, aa, bb, cc)
  if (a < b) return longestDiverseString(b, a, c, bb, aa, cc)
  if (b < c) return longestDiverseString(a, c, b, aa, cc, bb)
  if (b === 0) return aa.repeat(Math.min(a, 2), aa)

  let useA = Math.min(2, a)
  let useB = a - useA >= b ? 1 : 0
  return (
    aa.repeat(useA) +
    bb.repeat(useB) +
    longestDiverseString(a - useA, b - useB, c, aa, bb, cc)
  )
}
// console.log(longestDiverseString(5, 3, 0))
