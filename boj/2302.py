import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
arr = sorted([int(input()) for _ in range(m)])
dp = [0 for _ in range(41)]
dp[0] = 1
dp[1] = 1
for i in range(2, 41):
    dp[i] += dp[i-1] + dp[i-2]

cur = 0
ans = 1
for i in range(m):
    ans *= dp[arr[i]-cur-1]
    cur = arr[i]

ans *= dp[n - cur]

print(ans)
