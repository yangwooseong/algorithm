let minEatingSpeed = (piles, h) => {
  const getNecessaryHours = (k) => {
    return piles.reduce((a, b) => a + Math.ceil(b / k), 0)
  }

  let left = 0
  let right = 10 ** 9
  let mid
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    console.log(left, right, mid, getNecessaryHours(mid))
    if (getNecessaryHours(mid) <= h) {
      right = mid - 1
    } else if (getNecessaryHours(mid) > h) {
      left = mid + 1
    }
  }
  return left
}

const piles = [30, 11, 23, 4, 20]
const h = 6
console.log(minEatingSpeed(piles, h))
