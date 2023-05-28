/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
  const map = new Map()
  const n = piles.length
  const sums = new Array(n).fill(0)
  for (let i=n-1;i>-1;i--) {
      sums[i] = (sums[i+1] ?? 0) + piles[i]
  }

  const findMax = (start, m) => {
      const key = `${start}#${m}`
      
      if (n - start <= 2*m) { return sums[start] }
      if (map.has(key)) { return map.get(key) }

      let res = -Infinity
      for (let x=1;x<=2*m;x++) {
          res = Math.max(res, sums[start] - findMax(start+x, Math.max(x, m)))
      }

      map.set(key, res)

      return res
  }

  return findMax(0, 1)
};