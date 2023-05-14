/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
 var minDays = function(bloomDay, m, k) {
  if (bloomDay.length < m * k) { return -1 }
  const canMakeBouquets = (days) => {
      let neighbors = 0
      return bloomDay.map(v => v - days).reduce((acc, cur) => {
          if (cur <= 0) {
              neighbors += 1
              if (neighbors === k) {
                  acc += 1
                  neighbors = 0
              }
          } else {
              neighbors = 0
          }
          return acc
      }, 0) >= m
  }

  let left = 0
  let right = bloomDay.reduce((a, c) => Math.max(a, c))
  let ans = right

   while (left <= right) {
       const mid = Math.floor((left + right) / 2)

       if (canMakeBouquets(mid)) {
           right = mid - 1
           ans = Math.max(right, mid)
       } else {
           left = mid + 1
       }
   }

   return ans
};