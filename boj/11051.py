n, k = list(map(int, input().split()))

dp = [[0 for _ in range(k)] for _ in range(n)]
if k == 0:
    print(1)
    exit()
for i in range(n):
    for j in range(k):
        if j == 0:
            dp[i][j] = i + 1
        elif j == i:
            dp[i][j] = 1
        else:
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
            dp[i][j] %= 10007

print(dp[-1][-1])
