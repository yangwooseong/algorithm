function solution(n, edge) {
  const arr = new Array(n)
  for (let i = 0; i < n; i++) {
    arr[i] = new Array()
  }
  for (let line of edge) {
    arr[line[0] - 1].push(line[1] - 1)
    arr[line[1] - 1].push(line[0] - 1)
  }

  function bfs(node, visited) {
    let queue = [node]
    let furthestNum = 0

    while (queue.length !== 0) {
      const new_queue = []
      for (let q of queue) {
        for (let m of arr[q]) {
          if (visited[m] === false) {
            new_queue.push(m)
            visited[m] = true
          }
        }
      }
      if (new_queue.length === 0) return furthestNum
      furthestNum = new_queue.length
      queue = new_queue.slice()
    }
  }

  const visited = new Array(n).fill(false)
  visited[0] = true

  return bfs(0, visited)
}

const vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]

console.log(solution(6, vertex))
