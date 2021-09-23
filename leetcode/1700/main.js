/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let s = students
  let sa = sandwiches
  let getTry = 0
  while (getTry < s.length) {
    if (s[0] === sa[0]) {
      s.shift()
      sa.shift()
      getTry = 0
    } else {
      s = s.slice(1).concat(s[0])
      getTry = getTry + 1
    }
  }
  return s === undefined ? 0 : s.length
}
