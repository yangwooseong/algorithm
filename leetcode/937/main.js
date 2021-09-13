/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
  let digits = []
  let letters = []
  logs.forEach(log => {
    isNaN(log.split(' ')[1]) ? letters.push(log) : digits.push(log)
  })  
  letters.sort((a,b) => {
    const contentA = a.split(' ').slice(1).join(' ')
    const contentB = b.split(' ').slice(1).join(' ') 
    if(contentA !== contentB) {
      return contentA > contentB ? 1 : -1
    }
    else {
      return a.split(' ')[0] > b.split(' ')[0] ? 1 : -1
    }
  })
  return letters.concat(digits)
};

const logs = ["a1 act car","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
reorderLogFiles(logs)