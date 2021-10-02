/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let currentWord = []
  let word = s.split('')
  word.forEach(val => {
    if(!currentWord.includes(val)) {
      currentWord.push(val)
    }
    else {
      const newWord = currentWord.concat([val])
      newWord.splice(newWord.indexOf(val), 1)
      console.log(currentWord, newWord)
      if(currentWord.join('') > newWord) {
        currentWord = newWord
      }
    }
  })
  return currentWord.join('')
};

console.log(removeDuplicateLetters('cbacdcbc'))