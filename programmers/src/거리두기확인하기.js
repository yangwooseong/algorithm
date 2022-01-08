function solution(places) {
  let answer = []
  const checkSocialDistance = (room) => {
    const dx = [1, 0, -1, 0]
    const dy = [0, 1, 0, -1]
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (room[i][j] === 'P') {
          for (let k = 0; k < 4; k++) {
            const nx = i + dx[k]
            const ny = j + dy[k]
            if (0 <= nx && nx < 5 && 0 <= ny && ny < 5 && room[nx][ny] === 'P')
              return 0
          }
        }
        if (room[i][j] === 'O') {
          let count = 0
          for (let k = 0; k < 4; k++) {
            const nx = i + dx[k]
            const ny = j + dy[k]
            if (
              0 <= nx &&
              nx < 5 &&
              0 <= ny &&
              ny < 5 &&
              room[nx][ny] === 'P'
            ) {
              count += 1
            }
            if (count > 1) return 0
          }
        }
      }
    }
    return 1
  }

  for (const room of places) {
    answer.push(checkSocialDistance(room))
  }

  // console.log(answer)
  return answer
}

const places = [
  ['POOOP', 'OXXOO', 'OPXPX', 'OOXOX', 'POXPP'],
  ['POOPX', 'OXPXP', 'PXXXP', 'OXXXP', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
]

solution(places)
