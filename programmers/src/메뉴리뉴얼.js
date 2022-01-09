// // function solution(orders, course) {
// //   let answer = []
// //   // 메뉴는 2개 이상, 2명 이상의 손님으로부터 주문된 단품메뉴
// //   let prev_elements = []

// //   function combination(elements, k, results) {
// //     if (prev_elements.length === k) {
// //       let str_tmp = prev_elements.slice().sort().join('')
// //       results[str_tmp] =
// //         results[str_tmp] === undefined ? 1 : results[str_tmp] + 1
// //       return
// //     }

// //     for (let i = 0; i < elements.length; i++) {
// //       let next_elements = elements.slice(i + 1, elements.length)
// //       prev_elements.push(elements[i])
// //       combination(next_elements, k, results)
// //       prev_elements.pop()
// //     }
// //   }

// //   let arr = []
// //   orders.map((order) => {
// //     arr.push(order.split(''))
// //   })

// //   let results = []

// //   for (let i in course) {
// //     results.push({})
// //     for (let j in arr) {
// //       combination(arr[j], course[i], results[i])
// //     }
// //     console.log(results)
// //   }

// //   results.map((result) => {
// //     let max = 1
// //     for (let i in result) {
// //       if (max < result[i]) {
// //         max = result[i]
// //       }
// //     }

// //     for (let j in result) {
// //       if (result[j] === max && max > 1) {
// //         answer.push(j)
// //       }
// //     }
// //   })

// //   return answer.sort()
// // }

// // const orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH']

// // solution(orders, [2, 3, 4])

// function solution(orders, course) {
//   const dict = {}
//   const combination = (string, idx, arr) => {
//     if (course.includes(arr.length)) {
//       const course = arr.sort().join('')
//       dict[course] = dict[course] === undefined ? 1 : dict[course] + 1

//       if (arr.length === course.slice(-1)) return
//     }

//     for (let i = idx; i < string.length; i++) {
//       arr.push(string[i])
//       combination(string, i + 1, arr)
//       arr.pop()
//     }
//   }

//   for (const order of orders) {
//     combination(order, 0, [])
//   }

//   console.log(dict)
//   const map = new Map()

//   course.map((v) => map.set(v, []))

//   for (const [key, value] of Object.entries(dict)) {
//     if (value > 1) {
//       map.get(key.length).push(key)
//     }
//   }

//   const answer = []
//   console.log(map)
//   for (const value of map.values()) {
//     const longest = value.sort((a, b) => b.length - a.length)[0].length
//     console.log(longest)
//     answer.concat(value.filter((v) => v.length === longest))
//   }
//   console.log(answer)

//   console.log(answer)
// }

// const orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH']
// const course = [2, 3, 4]
// solution(orders, course)
