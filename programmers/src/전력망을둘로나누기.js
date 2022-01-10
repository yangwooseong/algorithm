function solution(n, wires) {
  const generateGraph = (wires) => {
    const graph = {}
    for (const [x, y] of wires) {
      graph[x] = graph[x] === undefined ? [y] : [...graph[x], y]
      graph[y] = graph[y] === undefined ? [x] : [...graph[y], x]
    }
    return graph
  }

  const dfs = (graph, node, visited) => {
    visited[node] = true
    if (graph[node] !== undefined) {
      for (let n of graph[node]) {
        if (!visited[n]) {
          visited[n] = true
          dfs(graph, n, visited)
        }
      }
    }
  }

  let min = Infinity
  for (let i = 0; i < wires.length; i++) {
    const splitedWires = [...wires.slice(0, i), ...wires.slice(i + 1)]
    const graph = generateGraph(splitedWires)
    const visited = new Array(n + 1).fill(false)
    dfs(graph, 1, visited)
    const nodes = visited.filter((v) => v === true).length
    min = Math.min(Math.abs(nodes - (n - nodes)), min)
  }

  console.log(min)
  return min
}

solution(7, [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
])
