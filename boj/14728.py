import sys
input = sys.stdin.readline

n, t = list(map(int, input().split()))
arr = [list(map(int, input().split())) for _ in range(n)]
dp = [0 for _ in range(t+1)]

for i in range(n):
    time, score = arr[i]
    for j in range(t, time-1, -1):
        dp[j] = max(dp[j], dp[j-time] + score)
    # print(dp)
print(dp[-1])
