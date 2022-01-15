const permuteUnique = function (nums) {
  const answer = []
  const set = new Set(nums)
  const remain = []

  nums.forEach((num) => (remain[num] ? remain[num]++ : (remain[num] = 1)))

  const dfs = (current, remain) => {
    if (current.length === nums.length) {
      answer.push(current.slice())
      return
    }

    for (const num of set) {
      if (remain[num]) {
        current.push(num)
        remain[num] -= 1

        dfs(current, remain)

        current.pop()
        remain[num] += 1
      }
    }

    return answer
  }
  return dfs([], remain)
}

permuteUnique([1, 1, 2])
