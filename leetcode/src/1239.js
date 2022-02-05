/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let dp = [new Set()]
  for (let word of arr) {
    let curSet = new Set(word)
    if (curSet.size < word.length) continue
    for (let set of dp) {
      if ([...set].filter((x) => curSet.has(x)).length) {
        continue
      }
      dp.push(new Set([...set, ...curSet]))
    }
    console.log(dp)
  }
  return Math.max(...dp.map((s) => s.size))
}

const arr = ['aa', 'bb']
console.log(maxLength(arr))
