/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const regex = /[^a-z]/g
  const splitedPara = paragraph.toLocaleLowerCase().replace(regex, ' ').split(' ').filter(val => val.length > 0)
  let dict = {}, res = '', max = -1
  splitedPara.forEach(word => {
    if(banned.includes(word)) return
    if(dict[word] == undefined) {
      dict[word] = 1
    }
    else {
      dict[word] = dict[word] + 1
    }
  })
  for(let k in dict) {
    if(dict[k] > max) {
      max = dict[k]
      res = k
    }
  } 
  return mostCommonWord
};
// const para = "a, a, a, a, b,b,b,c, c"
// const banned = ["hit"]
// console.log(mostCommonWord(para, banned))