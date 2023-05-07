/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
  const stack = []
  const last = (arr) => arr[arr.length - 1]

  for (let i=0;i<asteroids.length;i++) {
      
  
      while (last(stack) && last(stack) > 0 && last(stack) * asteroids[i] < 0 && Math.abs(last(stack)) < Math.abs(asteroids[i])) {
          stack.pop()
      }

      if (last(stack) === undefined || last(stack) < 0 || last(stack) * asteroids[i] > 0) {
          stack.push(asteroids[i])
      } else if (last(stack) && Math.abs(last(stack)) === Math.abs(asteroids[i])) {
          stack.pop()
      } else if (last(stack) && Math.abs(last(stack)) > Math.abs(asteroids[i])) {
          continue
      }
  }

  return stack
};