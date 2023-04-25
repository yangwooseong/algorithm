/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  const set = new Set()
  let sum = 0

  while (!set.has(n)) {
      set.add(n)

      while (n) {
          sum += (n%10)*(n%10)
          n = Math.floor(n/10)
      }    

      if (sum === 1) { return true }
      
      n = sum
      sum = 0
  }

  return false
};