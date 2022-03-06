/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getHappyString = function(n, k) {
  const arr = ['a', 'b', 'c']
  let ans
  const backtracking = (cur) => {
    if(cur.length === n) {
      k -= 1
      if(k === 0) ans = cur.join('')
      return
    }
    for(let i=0;i<arr.length;i++) {
      if(!cur || cur[cur.length-1] !== arr[i]) {
        cur.push(arr[i])
        backtracking(cur)
        cur.pop()
      }
    }
  }
  backtracking([])
  return k > 0 ? '' : ans
};