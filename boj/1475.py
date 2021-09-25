import sys
import math

input = sys.stdin.readline

room_num = input().rstrip()
nums = '0123456789'
d = {}
for num in nums:
    d[num] = 0

for num in room_num:
    d[num] += 1

d['6'], d['9'] = math.ceil(
    (d['6'] + d['9']) / 2),  math.ceil((d['6'] + d['9']) / 2)

m = 0
for num in nums:
    m = max(m, d[num])

print(m)
