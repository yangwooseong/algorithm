let guessNumber = (n) => {
  let left = 1
  let right = n
  let mid

  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (guess(mid) === 1) {
      left = mid + 1
    } else if (guess(mid) === -1) {
      right = mid
    }
  }
  return right
}

guessNumber(10)
