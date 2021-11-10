import sys
input = sys.stdin.readline
n, m = map(int, input().split())
arr = list(map(int, input().split()))
dp = [arr[0]] + [0] * (n-1)

for i in range(1, n):
    dp[i] = dp[i-1] + arr[i]

for _ in range(m):
    ans = 0
    start, end = map(int, input().split())
    ans += dp[end-1]
    if start == 1:
        print(ans)
    else:
        print(ans - dp[start-2])
