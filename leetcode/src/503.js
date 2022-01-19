let nextGreaterElements = (nums) => {
  const stack = []
  const l = nums.length
  const answer = new Array(l).fill(-1)

  for (let i = 0; i < 2 * l; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % l]) {
      answer[stack.pop()] = nums[i % l]
    }

    if (i < l) stack.push(i)

    // console.log(stack)
  }

  // console.log(answer)
  return answer
}

const nums = [1, 2, 3, 4, 3]
nextGreaterElements(nums)
