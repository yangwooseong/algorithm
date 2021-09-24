import sys
input = sys.stdin.readline

n = int(input())

stack = []
for _ in range(n):
    cur = int(input())
    while stack and stack[-1] <= cur:
        stack.pop()
    stack.append(cur)

print(len(stack))
