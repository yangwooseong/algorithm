/**
 * @param {string[]} nums
 * @return {string}
 */
// var findDifferentBinaryString = function (nums) {
//   let ans = ''
//   const dfs = (idx, current) => {
//     if (current.length === nums.length) {
//       if (!nums.includes(current)) {
//         ans = current
//         console.log(current)
//       } else return
//     }
//     for (let i = idx; i < nums.length; i++) {
//       if (!ans) {
//         for (let s of '01') {
//           dfs(i + 1, current + s)
//         }
//       }
//     }
//   }

//   dfs(0, '')
//   return ans
// }

var findDifferentBinaryString = function (nums) {
  const dfs = (idx, current) => {
    if (idx === nums.length) {
      return nums.includes(current.join('')) ? null : current.join('')
    }

    let res = dfs(idx + 1, current)
    if (res) return res

    current[idx] = '1'
    res = dfs(idx + 1, current)
    if (res) return res
  }

  return dfs(0, new Array(nums.length).fill('0'))
}

findDifferentBinaryString(['00', '10'])
