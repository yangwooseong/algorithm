/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const n = equations.length
    const graph = {}

   for (let i=0;i<n;i++) {
       const [to, from] = equations[i]
       if (!graph[from]) { 
           graph[from] = {}
       }

       if (!graph[to]) {
           graph[to] = {}
       }

       graph[from][to] = values[i]
       graph[to][from] = 1 / values[i]
   }

   const dfs = (node, cur, to, visited) => {
       if (visited.has(node) || !graph[node]) { return null }
       visited.add(node)
       if (node === to) { return cur * 1 }

       for (const neighbor of Object.keys(graph[node])) {
           const res = dfs(neighbor, cur * graph[node][neighbor], to, visited)

           if (res !== null) { return res }
       }

       return null
   }

    const ans = []
   for (const query of queries) {
        const value = dfs(query[1], 1, query[0], new Set())
        if (value !== null) {
            ans.push(value)
        } else {
            ans.push(-1)
        }
   }

   return ans
};