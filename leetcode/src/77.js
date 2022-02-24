/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  const ans = []
  const backtrack = (num, cur) => {
    if(cur.length === k) ans.push(cur.slice())
    for(let i=num;i<=n;i++) {
      cur.push(i)
      backtrack(i+1,cur)
      cur.pop()
    }
  }
  backtrack(1, [])

return ans
};