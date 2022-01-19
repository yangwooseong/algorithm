let nextGreaterElement = (nums1, nums2) => {
  const obj = {}
  const stack = []
  const answer = []

  for (const num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      obj[stack[stack.length - 1]] = num
      stack.pop()
    }
    stack.push(num)
  }
  for (const num of nums1) {
    answer.push(obj[num] || -1)
  }
  console.log(answer)
  return answer
}

const nums1 = [4, 1, 2]
const nums2 = [1, 3, 4, 2]
nextGreaterElement(nums1, nums2)
