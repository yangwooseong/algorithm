import sys
input = sys.stdin.readline

n = int(input())

arr = [0]
max_nums = [9]
offset = ''
m = '9'
for _ in range(8):
    offset += '9'
    m += '0'

    arr.append(int(offset))
    max_nums.append(int(m))

ans = 0

for idx, value in enumerate(arr):
    ans += min(max_nums[idx], max(0, n - int(value))) * (idx+1)
print(ans)
