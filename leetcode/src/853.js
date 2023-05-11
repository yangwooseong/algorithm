/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
 var carFleet = function(target, position, speed) {
  const getTime = ([pos, sp]) => (target - pos) / sp
  const stack = []

  const times = position
  .map((v, i) => [v, speed[i]])
  .sort((a, b) => a[0] - b[0])
  .map(getTime)

  for (const time of times) {
      while (stack.length && stack.at(-1) <= time) {
          stack.pop()
      }

      stack.push(time)
  }

  return stack.length
};

