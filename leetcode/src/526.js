/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  let ans = 0
  const perm = (current, index) => {
    if (current.size === n) {
      // console.log(Array.from(current))
      ans++
      return
    }

    for (let i = 1; i < n + 1; i++) {
      if (!current.has(i) && (!(index % i) || !(i % index))) {
        current.add(i)
        perm(current, index + 1)
        current.delete(i)
      }
    }
  }

  perm(new Set(), 1)
  return ans
}

countArrangement(5)
