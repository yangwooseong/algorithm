n = int(input())
arr = list(map(int, input().split()))

dp = [[0] * 21 for _ in range(n)]
dp[0][arr[0]] = 1

for i in range(1, n):
    for j in range(21):
        if dp[i-1][j] != 0:
            # print(j, arr[i])
            if 0 <= j - arr[i] <= 20:
                dp[i][j-arr[i]] += dp[i-1][j]
            if 0 <= j + arr[i] <= 20:
                dp[i][j+arr[i]] += dp[i-1][j]
    # print(dp, i)

print(dp[-2][arr[-1]])
