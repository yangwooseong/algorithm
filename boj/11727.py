import sys
input = sys.stdin.readline
sys.setrecursionlimit(100000)

n = int(input())
dp = [0 for _ in range(n+1)]

dp[1] = 1
if n >= 2:
    dp[2] = 3

for i in range(1, n-1):
    dp[i+2] = dp[i] * 2 % 10007 + dp[i+1] % 10007

print(dp[n] % 10007)
