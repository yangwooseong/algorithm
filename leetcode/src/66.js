let plusOne = (digits) => {
  let carry = 0
  let sum = 0
  for (let i = digits.length - 1; i >= 0; i--) {
    sum = i === digits.length - 1 ? digits[i] + 1 : digits[i] + carry
    carry = Math.floor(sum / 10)
    digits[i] = sum % 10
    if (!carry) break
  }
  if (carry) digits.unshift(1)
  return digits
}

const digits = [9]
plusOne(digits)
