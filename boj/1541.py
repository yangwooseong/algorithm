import re
p = re.compile('[+-]')

f = input()
tmp = f.replace('-', '+')
nums = list(map(int, tmp.split('+')))
ops = p.findall(f)

for i in range(len(ops)):
    if ops[i] == '-':
        continue

    nums[i] = nums[i] + nums[i+1]
    nums[i+1] = 0

if '-' not in ops:
    print(sum(nums))
else:
    first_minus_idx = ops.index('-')
    ans = sum(nums[:first_minus_idx+1]) - sum(nums[first_minus_idx+1:])

    print(ans)
