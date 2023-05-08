/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var removeDuplicates = function(s, k) {
  const stack = []

  for (const char of s) {
      if (stack.length >= k-1 && stack.slice(-(k-1)).every(v => v === char)) {
          for (let i=0;i<k-1;i++) {
              stack.pop()
          }
          continue
      }
      stack.push(char)
  }

  return stack.join('')
};