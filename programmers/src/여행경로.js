function solution(tickets) {
  let answer = []
  const result = []
  const visited = []
  const len = tickets.length

  tickets.sort()
  console.log(tickets)

  const dfs = (str, count) => {
    result.push(str)
    if (count === len) {
      answer = result.slice()
      return true
    }

    console.log(str)
    for (let i = 0; i < len; i++) {
      if (!visited[i] && tickets[i][0] === str) {
        visited[i] = true
        if (dfs(tickets[i][1], count + 1)) return true
        visited[i] = false
      }
    }

    result.pop()
    return false
  }

  dfs('ICN', 0)

  return answer
}

const cities = [
  ['ICN', 'JFK'],
  ['HND', 'IAD'],
  ['JFK', 'HND'],
]
console.log(solution(cities))
