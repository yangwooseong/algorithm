// /**
//  * @param {number[]} values
//  * @return {number}
//  */
// var maxScoreSightseeingPair = function (values) {
//   let valuesJ = values.map((val, idx) => val - idx)
//   let rightMax = valuesJ[valuesJ.length - 1]
//   for (let i = valuesJ.length - 2; i > -1; i--) {
//     const temp = valuesJ[i]
//     valuesJ[i] = rightMax
//     if (temp > rightMax) rightMax = temp
//   }
//   console.log(valuesJ)
//   valuesJ = valuesJ.map((val, idx) => val + idx + values[idx])
//   return Math.max(...valuesJ.slice(0, -1))
// }

// const values = [1, 3, 5]
// console.log(maxScoreSightseeingPair(values))

let maxScoreSightseeingPair = (values) => {
  let i = 0
  let ans = 0
  for (let j = 0; j < values.length; j++) {
    ans = Math.max(ans, A[i] + i + A[j] - j)
    if (A[i] + i < A[j] + j) {
      i = j
    }
  }
  return ans
}
