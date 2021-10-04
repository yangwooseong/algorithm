import sys
input = sys.stdin.readline
MAX = 100000
dp = [{1: 0, 2: 0, 3: 0} for _ in range(MAX+1)]
dp[1][1] = 1
dp[2][2] = 1
dp[3][1] = 1
dp[3][2] = 1
dp[3][3] = 1

DIVIDER = 1000000009
for i in range(4, MAX+1):
    dp[i][1] = (dp[i-1][2] + dp[i-1][3]) % DIVIDER
    dp[i][2] = (dp[i-2][1] + dp[i-2][3]) % DIVIDER
    dp[i][3] = (dp[i-3][1] + dp[i-3][2]) % DIVIDER

n = int(input())
for _ in range(n):
    m = int(input())
    print((dp[m][1] + dp[m][2] + dp[m][3]) % DIVIDER)
