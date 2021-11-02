dp = [[0]*31 for _ in range(31)]
dp[1] = list(range(31))

# print(dp)

for i in range(2, 31):
    for j in range(i, 31):
        # print(i, j)
        dp[i][j] = dp[i-1][j] + dp[i][j-1]

# print(dp)
while True:
    n = int(input())
    if n == 0:
        exit()
    else:
        print(dp[n][n])
