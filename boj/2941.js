let strs = 'ljes=njak'
let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
for (let char of croatia) {
  strs = strs.replace(char, '!')
}
console.log(strs.length)
