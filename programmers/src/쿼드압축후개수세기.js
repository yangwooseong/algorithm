function solution(arr) {
  let answer = []
  let map = new Map()
  map.set(0, 0)
  map.set(1, 0)

  const zip = (row, column, length) => {
    const element = arr[row][column]

    if (length === 1) {
      map.set(element, map.get(element) + 1)
      return
    }

    for (let i = row; i < row + length; i++) {
      for (let j = column; j < column + length; j++) {
        if (arr[i][j] !== element) {
          zip(row, column, length / 2)
          zip(row + length / 2, column, length / 2)
          zip(row, column + length / 2, length / 2)
          zip(row + length / 2, column + length / 2, length / 2)
          return
        }
      }
    }
    map.set(element, map.get(element) + 1)
  }

  zip(0, 0, arr.length)

  return [map.get(0), map.get(1)]
}

const arr = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
]
console.log(solution(arr))
