/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  const persons = new Array(1001).fill(0)

  trips.forEach(([passenger, from, to]) => {
      for (let i=from;i<to;i++) {
          persons[i] += passenger
      }
  })

  return persons.reduce((a, b) => Math.max(a, b)) <= capacity
};