/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = []
  let exploded = false
  for (const ast of asteroids) {
    while (stack.length && stack[stack.length - 1] > 0 && ast < 0) {
      if (Math.abs(stack[stack.length - 1]) < Math.abs(ast)) {
        stack.pop()
      } else if (Math.abs(stack[stack.length - 1]) === Math.abs(ast)) {
        stack.pop()
        exploded = true
      } else {
        exploded = true
        break
      }
    }
    if (!exploded) {
      stack.push(ast)
    }
    exploded = false
    console.log(stack)
  }
}
const ast = [-2, -1, 1, 2]
asteroidCollision(ast)
