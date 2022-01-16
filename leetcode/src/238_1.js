// let productExceptSelf = function (nums) {
//   const result = []
//   const prefixArr = []
//   const postfixArr = []

//   const lens = nums.length
//   for (let i = 0; i < lens; i++) {
//     if (i === 0) {
//       prefixArr.push(nums[i])
//       postfixArr.unshift(nums[lens - i - 1])
//     } else {
//       prefixArr.push(prefixArr[i - 1] * nums[i])
//       postfixArr.unshift(postfixArr[0] * nums[lens - i - 1])
//     }
//   }

//   for (let i = 0; i < lens; i++) {
//     if (i === 0) result.push(postfixArr[1])
//     else if (i === lens - 1) result.push(prefixArr[lens - 2])
//     else {
//       result.push(prefixArr[i - 1] * postfixArr[i + 1])
//     }
//   }
//   return result
// }

// const nums = [1, 2, 3, 4]
// productExceptSelf(nums)

let productExceptSelf = function (nums) {
  const prefixArr = new Array(nums.length).fill(1)
  let postfix = 1
  const result = new Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    prefixArr[i] = prefixArr[i - 1] * nums[i - 1]
  }
  // console.log(prefixArr)
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = prefixArr[i] * postfix
    postfix *= nums[i]
    // console.log(result.slice(), postfix)
  }
  return result
}

const nums = [1, 2, 3, 4]
productExceptSelf(nums)
