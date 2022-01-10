function solution(people, limit) {
  let answer = 0
  let left = 0
  let right = people.length - 1
  people.sort((a, b) => a - b)
  while (left <= right) {
    if (left === right) {
      answer += 1
      left += 1
    } else if (people[left] + people[right] <= limit) {
      left += 1
      right -= 1
      answer += 1
    } else {
      answer += 1
      right -= 1
    }
  }
  console.log(answer)
  return answer
}

const people = [1, 2, 3, 4, 5, 10, 6, 7, 1, 2]
const limit = 10
solution(people, limit)
