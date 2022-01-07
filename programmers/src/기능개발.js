function solution(progresses, speeds) {
  const n = progresses.length
  let stack = []
  const answer = []

  for (let i = 0; i < n; i++) {
    let day
    if ((100 - progresses[i]) % speeds[i] === 0) {
      day = (100 - progresses[i]) / speeds[i]
    } else {
      day = Math.floor((100 - progresses[i]) / speeds[i]) + 1
    }
    console.log(day)

    if (stack[0] < day) {
      answer.push(stack.length)
      stack = []
    }
    stack.push(day)
  }
  answer.push(stack.length)
  console.log(answer)

  return answer
}

solution([55, 60, 65], [5, 10, 7])
// solution([97, 98, 99], [1, 1, 1])
