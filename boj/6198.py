n = int(input())
ans = 0
arr = []
for _ in range(n):
    arr.append(int(input()))
arr.append(10**9+1)

stack = []
for i in range(n+1):
    while stack and arr[stack[-1]] <= arr[i]:
        ans += i - stack.pop() - 1
    stack.append(i)
    # print(stack, ans)

print(ans)
