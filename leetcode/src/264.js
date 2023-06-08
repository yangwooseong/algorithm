/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const uglyNums = [1]

  let i1 = 0
  let i2 = 0
  let i3 = 0

  while (n > 1) {
      const n1 = uglyNums[i1] * 2
      const n2 = uglyNums[i2] * 3
      const n3 = uglyNums[i3] * 5

      const min = Math.min(n1, n2, n3)
      uglyNums.push(min)

      if (min === n1) {
          i1 += 1
      }
      if (min === n2) {
          i2 += 1
      }
      if (min === n3) {
          i3 += 1
      }

      n -= 1
  }

  return uglyNums.at(-1)
};