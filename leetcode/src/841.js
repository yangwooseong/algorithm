/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const queue = [[0]]
  const visited = new Array(rooms.length).fill(false)

  while (queue.length) {
    const keys = queue.shift()
    for (const key of keys) {
      if (!visited[key]) {
        visited[key] = true
        queue.push(rooms[key])
      }
    }
  }
  return visited.every((v) => v === true)
}
