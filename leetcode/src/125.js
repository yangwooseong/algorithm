/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // const regex = /[^A-Za-z0-9]/gi
  // let word = s.replace(regex, '').toLowerCase()
  // return word === word.slice().split('').reverse().join('')
  const regex = /[^a-z0-9]/gi
  let word = s.toLocaleLowerCase().replace(regex, '')
  console.log(word)
  return word === word.slice().split('').reverse().join('')

  // const lowerString = s.replace(/\W+/g, '').replaceAll('_', '').toLowerCase()
  // const lowerStringArr = lowerString.split('')
  // const reversedLowerString = lowerStringArr.slice().reverse().join('')

  // return lowerString === reversedLowerString
};

const string = 'A man, a plan, a canal: Panama'
console.log(isPalindrome(string))