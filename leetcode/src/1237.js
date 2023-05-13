/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
 var findSolution = function(customfunction, z) {
  const getSolution = (a, b) => {
      let left = b
      let right = 1000

      while (left <= right) {
          const mid = Math.floor((left + right) / 2)
          if (customfunction.f(a, mid) === z) {
              return [a, mid]
          } else if (customfunction.f(a, mid) < z) {
              left = mid + 1
          } else {
              right = mid - 1
          }
      }

      return null
  }

  const ans = []
  let x = 1
  let y = 1

  // console.log("LOG: ", customfunction.f)
  while (customfunction.f(x,y) <= z && x <= 1000) {
      const sol = getSolution(x, y)
      if (sol) { ans.push (sol) }
      x += 1
  }

  return ans
};