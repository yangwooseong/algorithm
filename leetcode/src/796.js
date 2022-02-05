/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let arr = goal + goal
  for (let i = 0; i < arr.length - s.length; i++) {
    console.log(arr.slice(i, i + s.length))
    if (arr.slice(i, i + s.length) === s) return true
  }
  return false
}

const s = 'abcde'
const goal = 'cdeax'
rotateString(s, goal)
