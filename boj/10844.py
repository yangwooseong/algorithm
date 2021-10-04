import sys
input = sys.stdin.readline

n = int(input())
# dp[l][d], l: length of num, d: last digit
dp = [[0 for _ in range(10)] for _ in range(n+1)]

for i in range(10):
    if i == 0:
        continue
    dp[1][i] = 1

for l in range(1, n):
    for i in range(10):
        if i + 1 <= 9:
            dp[l+1][i] += dp[l][i+1]
        if i - 1 >= 0:
            dp[l+1][i] += dp[l][i-1]
print(sum(dp[-1]) % 10**9)
