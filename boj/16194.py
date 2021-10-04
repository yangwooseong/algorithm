import sys
input = sys.stdin.readline


n = int(input())
dp = [10**4 for _ in range(n+1)]
arr = list(map(int, input().split()))
arr = [0] + arr

dp[1] = arr[1]

for i in range(2, n+1):
    for j in range(1, i):
        dp[i] = min(dp[i-j] + arr[j], dp[i], arr[i])
    # print(dp)
print(dp[-1])
