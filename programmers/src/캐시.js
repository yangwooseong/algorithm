function solution(cacheSize, cities) {
  let answer = 0
  let cache = new Array(cacheSize).fill(0)
  cities = cities.map((city) => city.toLowerCase())
  if (cacheSize === 0) return cities.length * 5
  for (const city of cities) {
    if (!cache.includes(city)) {
      answer += 5
      cache = cache.slice(1).concat([city])
    } else {
      answer += 1
      const index = cache.indexOf(city)
      cache = cache
        .slice(0, index)
        .concat(cache.slice(index + 1))
        .concat([city])
    }
    console.log(cache)
  }
  console.log(answer)

  return answer
}

solution(0, ['Jeju', 'jeju'])
