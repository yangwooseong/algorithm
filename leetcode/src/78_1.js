let subsets = (nums) => {
  const answer = []

  const dfs = (idx, current) => {
    answer.push(current)
    if (current.length === nums.length) {
      return
    }

    for (let i = idx; i < nums.length; i++) {
      current.push(nums[i])
      dfs(i + 1, current)
      current.pop()
    }
  }

  dfs(0, [])
  return answer
}
