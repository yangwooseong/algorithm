import sys
input = sys.stdin.readline
sys.setrecursionlimit(100000)

n = int(input())
dp = [0 for _ in range(n+1)]


# def fib(n):
#     if n <= 2:
#         dp[n] = n
#         return dp[n]
#     if dp[n]:
#         return dp[n]
#     else:
#         dp[n] = fib(n-1) + fib(n-2)
#         return dp[n] % 10007


# print(fib(n))

# iteration
dp[1] = 1
if n >= 2:
    dp[2] = 2

for i in range(1, n-1):
    dp[i+2] = dp[i] % 10007 + dp[i+1] % 10007

print(dp[n])
