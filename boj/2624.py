import sys
input = sys.stdin.readline
T = int(input())
k = int(input())
coins = [list(map(int, input().split())) for _ in range(k)]
coins.sort(key=lambda x: x[0])
dp = [0 for _ in range(T+1)]
dp[0] = 1

for i in range(k):
    for j in range(T, -1, -1):
        value, num = coins[i]
        for l in range(num, 0, -1):
            if j-l*value >= 0 and dp[j-l*value]:
                dp[j] += dp[j-l*value]

print(dp[-1])
