/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {
  const isValid = (arr, strToPush) => {
    if (arr.length === 0) return true
    const lastNum = arr[arr.length - 1]
    const num = parseInt(strToPush)
    return lastNum > num && Math.abs(lastNum - num) === 1
  }

  let answer = false
  const dfs = (str, current) => {
    if (!str && current.length > 1) {
      answer = true
      return
    }
    for (let i = 1; i < str.length + 1; i++) {
      if (isValid(current, parseInt(str.slice(0, i), 10))) {
        current.push(str.slice(0, i))
        dfs(str.slice(i), current)
        current.pop()
      }
    }
  }

  dfs(s, [])
  return answer
}

splitString('0090089')
