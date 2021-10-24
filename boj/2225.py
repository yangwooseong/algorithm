n, k = list(map(int, input().split()))

dp = [[0 for _ in range(n)] for _ in range(k)]
dp[0] = [1 for _ in range(n)]

for i in range(1, k):
    for j in range(n):
        if j == 0:
            dp[i][j] = i+1
        else:
            dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % (10**9)

print(dp[-1][-1])
