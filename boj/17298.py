import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))
stack = deque()
res = [-1 for _ in range(n)]

for i in range(n-1):
    stack.append(i)
    # print(stack)
    if stack and arr[i+1] <= arr[stack[-1]]:
        continue
    while stack and arr[i+1] > arr[stack[-1]]:
        # print(stack)
        res[stack.pop()] = arr[i+1]
print(' '.join(list(map(str, res))))
