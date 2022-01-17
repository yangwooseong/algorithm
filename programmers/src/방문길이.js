function solution(dirs) {
  const obj = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  }
  let currentX = 0
  let currentY = 0
  let nx
  let ny
  const track = new Set()
  for (const dir of dirs) {
    const [dx, dy] = obj[dir]
    nx = currentX + dx
    ny = currentY + dy
    if (-5 <= nx && nx <= 5 && -5 <= ny && ny <= 5) {
      const road = [
        [currentX, currentY],
        [nx, ny],
      ].sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
      // console.log(road)
      track.add(road.map((item) => item.join('')).join(''))
      currentX = nx
      currentY = ny
    }
  }
  // console.log(track)
  return track.size
}

const dirs = 'LULLLLLLU'
solution(dirs)
