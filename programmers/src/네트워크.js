function solution(n, computers) {
  function dfs(n, visited) {
    for (let neighbor of graph[n]) {
      if (visited[neighbor] === false) {
        visited[neighbor] = true
        dfs(neighbor, visited)
      }
    }
  }

  let graph = new Array(n)
  for (let i = 0; i < n; i++) {
    graph[i] = new Array()
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (computers[i][j] && i !== j) {
        graph[i].push(j)
      }
    }
  }

  const visited = new Array(n).fill(false)
  let answer = 0

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, visited)
      answer += 1
    }
  }
  console.log(answer)
}

let computers = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]
solution(3, computers)
