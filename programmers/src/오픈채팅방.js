function solution(record) {
  const answer = []
  const dict = {}

  for (const r of record) {
    const arr = r.split(' ')
    const [type, id, name] = arr
    if (type === 'Enter') {
      answer.push([id, '님이 들어왔습니다.'])
    } else if (type === 'Leave') {
      answer.push([id, '님이 나갔습니다.'])
    }
    if (name !== undefined) dict[id] = name
  }

  console.log(dict)

  let result = answer.map((item) => dict[item[0]] + item[1])
  console.log(result)

  return result
}

solution([
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
])
