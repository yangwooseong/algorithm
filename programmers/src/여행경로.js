function solution(tickets) {
  const t = tickets.slice()
  t.sort((a, b) => {
    return a[1] - b[1]
  })

  const graph = {}
  for (let v of t) {
    if (graph[v[0]] === undefined) {
      graph[v[0]] = [[v[1], false]]
    } else {
      graph[v[0]].push([v[1], false])
    }
  }

  console.log(graph)
  const path = []
  const traverse = (current) => {
    if (graph[current] === undefined) return
    path.push(current)
    for (let city of graph[current]) {
      if (city[1] === false) {
        city[1] = true
        traverse(city[0])
      }
    }
  }

  traverse('ICN')
  return path
}

const cities = [
  ['ICN', 'JFK'],
  ['HND', 'IAD'],
  ['JFK', 'HND'],
]

console.log(solution(cities))
