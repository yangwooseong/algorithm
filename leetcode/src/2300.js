/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  const n = spells.length
  const m = potions.length
  potions.sort((a,b) => a - b)

  const findCount = (spell) => {
      if (potions[0] * spell >= success) { return m }
      if (potions.at(-1) * spell < success) { return 0 }

      let left = 0
      let right = m - 1

      while (left <= right) {
          const mid = Math.floor((left + right) / 2)
          if (potions[mid] * spell < success) {
              left = mid + 1
          } else if (potions[mid] * spell >= success) {
              right = mid - 1
          }
      }

      return m - 1 - right
  }


  return spells.map(findCount)
};