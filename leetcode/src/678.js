let checkValidString = (s) => {
  let leftMin = 0
  let leftMax = 0
  for (let c of s) {
    if (c === '(') {
      leftMax += 1
      leftmin += 1
    } else if (c === ')') {
      leftMax -= 1
      leftMin -= 1
    } else {
      leftMax += 1
      leftMin -= 1
      if (leftMin < 0) leftMin = 0
    }
    if (leftMin < 0) return false
  }
  return true
}

const s = ')*)*)*)'
console.log(checkValidString(s))
