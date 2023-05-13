/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 var shipWithinDays = function(weights, days) {
  const canShip = (capacity) => {
      let cap = capacity
      return weights.reduce((acc, cur) => {
          // console.log("LOG: ", cap, acc, cur)
          if (cap < cur) {
              acc += 1
              cap = capacity
          } 

          cap -= cur

          return acc
      }, 1) <= days
  }

  let left = weights.reduce((acc, cur) => acc < cur ? cur : acc)
  let right = weights.reduce((acc, cur) => acc + cur)
  let ans = right

  while (left <= right) {
      const mid = Math.floor((left + right) / 2 )
      // console.log("LOG: ", left, right, mid, shippingDayWith(mid))

      if (canShip(mid)) {
          ans = Math.min(right, mid)
          right = mid - 1
      } else {
          left = mid + 1
      }
  }

  return ans
};