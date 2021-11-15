function solution(genres, plays) {
  var answer = []
  let obj = {}
  for (let i = 0; i < plays.length; i++) {
    const genre = genres[i]
    const play = plays[i]

    obj[genre] = !obj[genre]
      ? { sum: play, songs: [[i, play]] }
      : {
          sum: obj[genre].sum + play,
          songs: [...obj[genre].songs, [i, play]],
        }
  }
  let sortedArray = Object.values(obj).sort((a, b) => b.sum - a.sum)
  sortedArray = sortedArray.map((val) => {
    let songs = val.songs
    songs.sort((a, b) => {
      if (a[1] !== b[1]) {
        return b[1] - a[1]
      } else {
        return a[0] - b[0]
      }
    })
    return songs
  })
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < Math.min(2, sortedArray[i].length); j++) {
      answer.push(sortedArray[i][j][0])
    }
  }

  return answer
}

solution(
  ['classic', 'pop', 'classic', 'classic', 'pop'],
  [800, 600, 150, 800, 2500],
)
