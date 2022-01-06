// function solution(gems) {
//   var answer = []
//   const size = new Set(gems).size
//   let currentLength = 100000
//   for (let i = 0; i < gems.length; i++) {
//     for (let j = 0; j < gems.length; j++) {
//       const tmpSet = new Set(gems.slice(i, j + 1))
//       if (tmpSet.size === size && j - i + 1 < currentLength) {
//         currentLength = j - i + 1
//         answer = [i + 1, j + 1]
//         break
//       }
//     }
//   }

//   console.log(answer)

//   return answer
// }

// const gems = ['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB']
// solution(gems)

// O(n^2)

function solution(gems) {
  var answer = []
  const kinds = new Set(gems).size
  const shoppingBag = new Map()
  const list = []

  for (let i = 0; i < gems.length; i++) {
    shoppingBag.delete(gems[i])
    shoppingBag.set(gems[i], i + 1)
    if (kinds === shoppingBag.size) {
      list.push([shoppingBag.values().next().value, i + 1])
    }
  }

  list.sort((a, b) =>
    a[1] - a[0] === b[1] - b[0] ? a[0] - b[0] : a[1] - a[0] - (b[1] - b[0]),
  )

  return list[0]
}

const gems = ['a', 'b', 'c', 'c', 'a', 'b', 'c']
solution(gems)
