import sys
from collections import deque
input = sys.stdin.readline

n = int(input())

arr = list(map(int, input().split()))
dict = {}

for num in arr:
    if num in dict:
        dict[num] += 1
    else:
        dict[num] = 1

result = [-1 for _ in range(n)]
stack = deque()
for i in range(n-1):
    stack.append(i)
    if dict[arr[stack[-1]]] >= dict[arr[i+1]]:
        continue
    while stack and dict[arr[stack[-1]]] < dict[arr[i+1]]:
        result[stack.pop()] = arr[i+1]

print(' '.join(list(map(str, result))))
