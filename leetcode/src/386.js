/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  const ans = []
  const helper = (start, end) => {
      while (start <= end && start <= n) {
          ans.push(start)

          helper(start * 10, start * 10 + 9) 

          start += 1
      }
  }

  helper(1, 9)
  return ans
};