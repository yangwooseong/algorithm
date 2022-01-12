// let numTeams = function (rating) {
//   let answer = 0
//   const dfs = (idx, current) => {
//     if (current.length === 3) {
//       if (current[0] > current[1] && current[1] > current[2]) {
//         answer += 1
//       } else if (current[0] < current[1] && current[1] < current[2]) {
//         answer += 1
//       }
//       console.log(current)
//       return
//     }
//     for (let i = idx; i < rating.length; i++) {
//       current.push(rating[i])
//       dfs(i + 1, current)
//       current.pop()
//     }
//   }
//   dfs(0, [])

//   return answer
// }

// const ratings = [2, 5, 3, 4, 1]
// numTeams(ratings)
// T.C O(n^3)

let numTeams = function (rating) {
  let answer = 0
  const n = rating.length
  let dp1 = new Array(n).fill(0)
  let dp2 = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (rating[i] > rating[j]) {
        dp1[i]++
        answer += dp1[j]
      }
      if (rating[i] < rating[j]) {
        dp2[i]++
        answer += dp2[j]
      }
    }
  }
  console.log(answer)

  return answer
}

numTeams([2, 1, 3, 4])
