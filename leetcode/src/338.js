var countBits = function (n) {
  const ans = new Array(n + 1).fill(0)
  const getMaximumPower = (n) => {
    let p = 0
    while (2 ** p <= n) p++
    p--
    return p
  }
  for (let i = 1; i <= n; i++) {
    const p = getMaximumPower(i)
    ans[i] = ans[i - 2 ** p] + 1
  }
  return ans
} // O(nlogn)

// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// var countBits = function (n) {
//   const ans = new Array(n + 1).fill(0)
//   let offset = 1
//   for (let i = 1; i <= n; i++) {
//     if (offset * 2 === i) offset *= 2
//     ans[i] = ans[i - offset] + 1
//   }
//   return ans
// } // O(n)
