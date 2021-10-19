n = int(input())
dp = [[0 for _ in range(10)] for _ in range(n)]
dp[0] = [1 for _ in range(10)]

for i in range(1, n):
    for j in range(10):
        for k in range(j, 10):
            dp[i][j] += dp[i-1][k]
        dp[i][j] %= 10007
print(sum(dp[-1]) % 10007)
