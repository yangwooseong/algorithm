import sys
input = sys.stdin.readline

for _ in range(int(input().rstrip())):
    n = int(input().rstrip())
    coins = list(map(int, input().rstrip().split()))
    total = int(input().rstrip())

    dp = [[0] * (total+1) for _ in range(n)]
    dp[0][0] = 1

    for i in range(1, total+1):
        if i % coins[0] == 0:
            dp[0][i] = 1

    for i in range(1, n):
        dp[i] = dp[i-1][:]
        for j in range(1, total//coins[i]+1):
            for k in range(j*coins[i], total+1):
                dp[i][k] += dp[i-1][k-j*coins[i]]
                # print(k)
    print(dp[-1][-1])
