/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
  if (gas.reduce((a, b) => a + b) < cost.reduce((a, b) => a + b)) { return -1 }

  let total = 0
  let start = 0
  for (let i=0;i<gas.length;i++) {
      total += gas[i] - cost[i]

      if (total < 0) { 
          total = 0 
          start = i + 1
      } 
  }

  return start

  // for (let i=0;i<gas.length;i++) {
  //     let location = i
  //     let gasInPocket = 0

  //     while (true) {
  //         gasInPocket += gas[location]
  //         gasInPocket -= cost[location]

  //         if (gasInPocket < 0) { break }
  //         location += 1
          
  //         if (location === gas.length) { location = 0 }
  //         if (location === i) { return i }
  //     }
  // }

  // return -1
};