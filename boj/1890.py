import sys
input = sys.stdin.readline

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
dp = [[0]*n for _ in range(n)]
dp[0][0] = 1

for i in range(n):
    for j in range(n):
        if i == n-1 and j == n-1:
            print(dp[i][j])
            exit()
            # exit()
        m = arr[i][j]
        if i + m < n:
            dp[i+m][j] += dp[i][j]
        if j + m < n:
            dp[i][j+m] += dp[i][j]

# print(dp)
