/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  function dfs(a) {
    while (graph[a] != undefined && graph[a].length != 0) {
      const b = graph[a].shift()
      dfs(b)
    }
    ans.push(a)
  }

  graph = {}
  for (let i = 0; i < tickets.length; i++) {
    const start = tickets[i][0]
    const end = tickets[i][1]
    if (graph[start] == undefined) {
      graph[start] = [end]
    } else {
      graph[start].push(end)
    }
    graph[start].sort()
  }

  ans = []
  dfs('JFK')
  ans.reverse()
  return ans
}

findItinerary([
  ['JFK', 'KUL'],
  ['JFK', 'NRT'],
  ['NRT', 'JFK'],
])
