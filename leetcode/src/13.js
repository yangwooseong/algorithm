/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const dict = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
  }
  let ans = 0

  let i = 0
  while (i < s.length) {
      if (dict[s.slice(i, i+2)]) {
          ans += dict[s.slice(i, i+2)]
          i += 2
      } else {
          ans += dict[s[i]]
          i += 1
      }
  }
  return ans
};