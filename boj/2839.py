n = int(input())

# dp
MAX = 10**4
dp = [MAX for _ in range(5001)]
dp[3] = 1
dp[5] = 1
for i in range(6, 5001):
    if dp[i-5] == MAX and dp[i-3] == MAX:
        continue
    else:
        dp[i] = min(dp[i-5], dp[i-3]) + 1
print(-1 if dp[n] == MAX else dp[n])
