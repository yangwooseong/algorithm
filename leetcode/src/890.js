/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const ans = []
  const s = new Set(pattern).size
  for (let word of words) {
    const hashMap = {}
    if (new Set(word).size !== s) continue
    for (let i = 0; i < word.length; i++) {
      if (hashMap[word[i]] && hashMap[word[i]] !== pattern[i]) {
        break
      } else if (!hashMap[word[i]]) {
        hashMap[word[i]] = pattern[i]
      }
      if (i === word.length - 1) {
        ans.push(word)
      }
    }
  }
  return ans
}
