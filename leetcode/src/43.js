/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const n1 = num1.length
  const n2 = num2.length
  const arr = new Array(n1+n2).fill(0)

  const add = (n, i) => {
      arr[i - 1] += Math.floor(n / 10)
      arr[i] += n % 10
  }

  for (let i=0;i<n1;i++) {
      for (let j=0;j<n2;j++) {
          const d = n1 + n2 -1 - (n1 - i -1 + n2 - j - 1)
          const m = num1[i] * num2[j]
          add(m, d)
      }
  }

  for (let i=arr.length-1;i>0;i--) {
      arr[i-1] += Math.floor(arr[i] / 10)
      arr[i] %= 10
  }

  const str = arr.join('')
  return str.slice(arr.findIndex(v => v))
};