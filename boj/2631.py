import sys
input = sys.stdin.readline

n = int(input())
arr = [int(input()) for _ in range(n)]
dp = [1 for _ in range(n)]

for i in range(1, n):
    for j in range(i, -1, -1):
        if arr[j] < arr[i]:
            dp[i] = max(dp[j]+1, dp[i])
    # print(dp)

print(n - max(dp))
