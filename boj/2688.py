dp = [[0] * 10 for _ in range(64)]
dp[0] = [1] * 10
for i in range(1, 64):
    for j in range(10):
        for k in range(j, 10):
            dp[i][j] += dp[i-1][k]

for _ in range(int(input())):
    print(sum(dp[int(input())-1]))
