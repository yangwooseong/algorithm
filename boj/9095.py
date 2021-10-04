import sys
input = sys.stdin.readline
n = int(input())

dp = [0 for _ in range(11)]
dp[1] = 1
dp[2] = 2
dp[3] = 4

for i in range(1, 8):
    dp[i+3] = dp[i+2] + dp[i+1] + dp[i]

for _ in range(n):
    print(dp[int(input())])
