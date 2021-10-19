dp = [[0 for _ in range(31)] for _ in range(31)]

for i in range(1, 31):
    for j in range(i, 31):
        if i == j:
            dp[i][j] = 1
        else:
            dp[i][j] = dp[i-1][j-1] + dp[i][j-1] if i != 1 else j


t = int(input())
for _ in range(t):
    n, m = list(map(int, input().split()))
    print(dp[n][m])
