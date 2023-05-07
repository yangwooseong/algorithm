/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
  const stack = []

  for (const char of s) {
      if (stack && stack[stack.length-1] === char) {
          while (stack && stack[stack.length-1] === char) {
              stack.pop()
          }
          continue
      }
      stack.push(char)       
  }

  return stack.join('')
};