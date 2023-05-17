/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
  const dict = { 0: 1, 1: 1}
  const helper = (n) => {
      if (dict[n]) { return dict[n] }

      let res = 0

      for (let i=0;i<n;i++) {
          res += helper(i) * helper(n-i-1)
      }

      dict[n] = res

      return res
  }

  return helper(n)
};