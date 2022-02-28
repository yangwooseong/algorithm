/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  dictionary = dictionary.sort((a, b) => a.length - b.length)
  return sentence
    .split(' ')
    .map((word) => {
      for (let root of dictionary) {
        if (word.startsWith(root)) return root
      }
      return word
    })
    .join(' ')
}
