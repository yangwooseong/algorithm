/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(l1, l2) {
  let i1 = 0
  let i2 = 0
  const ans = []

  while (i1 < l1.length && i2 < l2.length) {
      if (l2[i2][0] <= l1[i1][1] && l1[i1][0] <= l2[i2][1]) {
          ans.push([
              Math.max(l1[i1][0], l2[i2][0]),
              Math.min(l1[i1][1], l2[i2][1]),
          ])
      }

      if (l1[i1][1] <= l2[i2][1]) {
          i1 += 1
      } else {
          i2 += 1
      }
  }

  return ans
};