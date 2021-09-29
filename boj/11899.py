import sys
input = sys.stdin.readline

arr = list(input().rstrip())
stack = []
for i in range(len(arr)):
    if arr[i] == '(':
        stack.append(arr[i])
    else:
        if stack and stack[-1] == '(':
            stack.pop()
        else:
            stack.append(arr[i])

print(len(stack))
