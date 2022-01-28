let isPowerOfFour = (n) => {
  const isDividedByFour = (num) => {
    if (num === 1) return true
    else if (num % 4 !== 0) return false

    return isDividedByFour(num / 4)
  }
  return isDividedByFour(n)
}

isPowerOfFour(16)
