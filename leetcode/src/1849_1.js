/**
 * @param {string} s
 * @return {boolean}
 */
 var splitString = function(s) {
  let ans = false
  const isDescendingConsecutive = (a, b) => Number(a) - Number(b) === 1

  const dfs = (idx, cur) => {
      if (idx === s.length) { 
          ans = true 
          return
      }
      for (let i=idx;i<s.length;i++) {
          const next = s.slice(idx, i+1)
          if (next === s) { return }
          if (!cur || isDescendingConsecutive(cur, next)) {
              dfs(i+1, next)
          }
      }
  }

  dfs(0, '')

  return ans
};