function solution(jobs) {
  let answer = 0
  let total = 0

  jobs.sort((a, b) => a[1] - b[1])
  console.log(jobs)
  for (const job of jobs) {
    total = total + total + job[1] - job[0]
    console.log(total)
  }

  answer = Math.floor(total / jobs.length)
  console.log(answer)
  return answer
}

const jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
]
solution(jobs)
