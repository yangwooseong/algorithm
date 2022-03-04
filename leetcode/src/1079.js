/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const countByTile = {}
  for (let tile of tiles) {
    countByTile[tile] = countByTile[tile] + 1 || 1
  }

  let ans = 0
  const backtrack = (cur) => {
    if (cur) ans += 1
    if (cur.length === tiles.length) return

    for (let tile of Object.keys(countByTile)) {
      if (countByTile[tile] > 0) {
        countByTile[tile] -= 1
        backtrack(cur + tile)
        countByTile[tile] += 1
      }
    }
  }

  backtrack('')

  return ans
}
