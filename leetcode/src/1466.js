/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 var minReorder = function(n, connections) {
  const graph = {} 
  const directedGraph = {}
  const visited = {}

  for (let i=0;i<n;i++) {
      graph[i] = []
      directedGraph[i] = []
  }
  for (const connection of connections) {
      const [from, to] = connection
      graph[from].push(to)
      graph[to].push(from)
      directedGraph[from].push(to)
  }

  let ans = 0

  const dfs = (city) => {
      visited[city] = true
      for (const neighbor of graph[city]) {
          if (visited[neighbor]) { continue }

          if (directedGraph[city].includes(neighbor)) {
              ans += 1
          }
          visited[neighbor] = true
          dfs(neighbor)
      }
  }

  dfs(0)

  return ans
};