n, m = list(map(int, input().split()))
dp = [[0] * (m+1) for _ in range(n+1)]

for i in range(1, n+1):
    for j in range(1, m+1):
        if j > i:
            continue
        if j == 1:
            dp[i][j] = i
        elif j == i:
            dp[i][j] = 1
        else:
            dp[i][j] = dp[i-1][j] + dp[i-1][j-1]

print(dp[-1][-1])
