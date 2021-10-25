n = int(input())
arr = list(map(int, input().split()))
stack = []
ans = [0 for _ in range(n)]

for i in range(n):
    while stack and arr[stack[-1]] < arr[i]:
        stack.pop()
    if stack:
        ans[i] = stack[-1] + 1
    else:
        ans[i] = 0
    stack.append(i)

print(' '.join(list(map(str, ans))))
