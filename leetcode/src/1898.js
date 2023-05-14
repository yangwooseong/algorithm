/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
 var maximumRemovals = function(s, p, removable) {
  const isSubsequence = (big) => {
      let i = 0
      let j = 0

      while (i < big.length) {
          if (big[i] === p[j]) {
              j += 1
              if (j === p.length) {
                  return true
              }
          }
          i += 1
      }
      return false
  }

  let left = 0
  let right = removable.length
  let res = 0
  s = s.split('')

  while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const set = new Set(removable.slice(0, mid))
      let removedString = s.filter((v, i) => !set.has(i))

      if (isSubsequence(removedString, p)) {
          res = mid
          left = mid + 1
      } else {
          right = mid - 1
      }
  }

  return res
};