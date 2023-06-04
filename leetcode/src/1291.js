/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  const dict = {
      1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  }

  for (let i=2;i<10;i++) {
      dict[i] = dict[i-1].filter(v => v % 10 !== 9).map(v => v + '' + (v % 10 + 1))
  }

  return Object.values(dict).flatMap(v => v).filter(v => low <= v && v <= high)
};