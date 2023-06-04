/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
  const n = bombs.length

  const canDetonate = (bomb1, bomb2) => {
      const [x1, y1, r1] = bomb1
      const [x2, y2, r2] = bomb2

      return r1 >= ((x1-x2)**2 + (y1-y2)**2)**0.5
  }
  const graph = bombs.reduce((acc, cur, idx) => {
      if (!acc[idx]) { acc[idx] = [] }

      for (let i=0;i<n;i++) {
          if (canDetonate(bombs[idx], bombs[i])) {
              acc[idx].push(i)
          }
      }
      return acc
  }, {})
  
  const dfs = (node, visited) => {
      let res = 1
      visited.add(node)
      
      for (const neighbor of graph[node]) {
          if (!visited.has(neighbor)) { 
              res += dfs(neighbor, visited) 
          }
      }

      return res
  }

  return bombs.reduce((acc, cur, idx) => Math.max(acc, dfs(idx, new Set())), 0)
};