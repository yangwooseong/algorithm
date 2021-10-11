# import re
# p = re.compile('[+-]')

# f = input()
# tmp = f.replace('-', '+')
# nums = list(map(int, tmp.split('+')))
# ops = p.findall(f)

# for i in range(len(ops)):
#     if ops[i] == '-':
#         continue

#     nums[i] = nums[i] + nums[i+1]
#     nums[i+1] = 0

# if '-' not in ops:
#     print(sum(nums))
# else:
#     first_minus_idx = ops.index('-')
#     ans = sum(nums[:first_minus_idx+1]) - sum(nums[first_minus_idx+1:])

#     print(ans)


# 더 깔끔한 풀이
a = input().split('-')
num = []
for i in a:
    partial_sum = 0
    s = i.split('+')
    for j in s:
        partial_sum += int(j)
    num.append(partial_sum)
ans = num[0]
for i in range(1, len(num)):
    ans -= num[i]
print(ans)
