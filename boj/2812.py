import heapq
import sys

n, k = list(map(int, input().split()))
num = list(input())
stack = [num[0]]
if n == 1 and k == 1:
    print(0)
    exit()

for i in range(1, n):
    while stack and int(num[i]) > int(stack[-1]) and k > 0:
        stack.pop()
        k -= 1
    stack.append(num[i])
    # print(stack)

while k > 0:
    stack.pop()
    k -= 1
    # print(stack)

print(int(''.join(stack)))
