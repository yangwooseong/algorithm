function solution(bridgeLength, weight, truckWeights) {
  let bridgeTruckes = new Array(bridgeLength).fill(0)
  let time = 0
  while (truckWeights.length || Math.max(...bridgeTruckes)) {
    // move
    // console.log(time, bridgeTruckes, truckWeights)
    bridgeTruckes = bridgeTruckes.slice(1)
    const nextTruck = truckWeights[0]
    if (bridgeTruckes.reduce((a, b) => (a += b), 0) + nextTruck <= weight) {
      bridgeTruckes = bridgeTruckes.concat([nextTruck])
      truckWeights.shift()
    } else {
      bridgeTruckes = bridgeTruckes.concat([0])
    }
    time += 1
  }
  console.log(time)
  return time
}

console.log(solution(100, 100, [10]))
