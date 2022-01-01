function solution(numbers, target) {
  let answer = 0
  function dfs(idx, numbers, current) {
    if (idx === numbers.length) {
      if (current === target) {
        answer += 1
      }
      return
    }

    dfs(idx + 1, numbers, current + numbers[idx])
    dfs(idx + 1, numbers, current - numbers[idx])
  }

  dfs(0, numbers, 0)

  return answer
}

solution([1, 1, 1, 1, 1], 3)
