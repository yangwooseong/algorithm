function solution(clothes) {
  var answer = 1
  let obj = {}
  for (let i = 0; i < clothes.length; i++) {
    let type = clothes[i][1]
    obj[type] = obj[type] === undefined ? 1 : obj[type] + 1
  }

  for (let key of Object.keys(obj)) {
    answer *= obj[key] + 1
  }
  return answer - 1

  // return (
  //   Object.values(
  //     clothes.reduce((obj, t) => {
  //       obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1
  //       return obj
  //     }, {}),
  //   ).reduce((acc, cur) => {
  //     return acc * (cur + 1)
  //   }, 1) - 1
  // )
}

solution([
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
])
