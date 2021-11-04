n = int(input())
dp = [i+1 for i in range(n)]

for i in range(0, n-3):
    for j in range(i+3, n):
        dp[j] = max(dp[j], dp[i]+dp[i]*(j-i-2))
print(dp[-1])
