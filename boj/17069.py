
import sys
input = sys.stdin.readline

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
dp = [[[0 for _ in range(n)] for _ in range(n)] for _ in range(3)]
dp[0][0][1] = 1

for i in range(n):
    for j in range(2, n):
        if arr[i][j] == 1:
            continue

        dp[0][i][j] = dp[0][i][j-1]
        dp[2][i][j] = dp[2][i-1][j]

        dp[0][i][j] += dp[1][i][j-1]
        if i >= 1:
            dp[2][i][j] += dp[1][i-1][j]
            if not (arr[i-1][j] or arr[i][j-1] or arr[i-1][j-1]):
                dp[1][i][j] = dp[1][i-1][j-1] + \
                    dp[0][i-1][j-1] + dp[2][i-1][j-1]

print(dp[0][-1][-1] + dp[1][-1][-1] + dp[2][-1][-1])
