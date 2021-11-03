import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
arr = [list(map(int, input().split())) for _ in range(n)]
dp = [[0] * m for _ in range(n)]
dp[0][0] = arr[0][0]

for i in range(n):
    for j in range(m):
        ni, nj = i-1, j
        if 0 <= ni < n and 0 <= nj < m:
            dp[i][j] = max(dp[i][j], dp[ni][nj] + arr[i][j])
        ni, nj = i, j-1
        if 0 <= ni < n and 0 <= nj < m:
            dp[i][j] = max(dp[i][j], dp[ni][nj] + arr[i][j])
        ni, nj = i-1, j-1
        if 0 <= ni < n and 0 <= nj < m:
            dp[i][j] = max(dp[i][j], dp[ni][nj] + arr[i][j])

print(dp[-1][-1])
