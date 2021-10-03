import sys
from collections import deque

input = sys.stdin.readline
n = int(input())
stack = deque([1])
count = 0
ans = []
possible = True

# for _ in range(n):
#     num = int(input())
#     if not possible:
#         continue
#     while count < num:
#         count += 1
#         stack.append(count)
#         ans.append('+')

#     if stack[-1] == num:
#         stack.pop()
#         ans.append('-')
#     else:
#         possible = False

# if possible:
#     print('\n'.join(ans))
# else:
#     print('NO')
