/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  let ans = 1
  let set = new Set()

  for (const char of s) {
      if (set.has(char)) {
          set = new Set()
          ans += 1
      }
      set.add(char)
  }

  return ans
};