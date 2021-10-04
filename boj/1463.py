import sys
sys.setrecursionlimit(1000000)
input = sys.stdin.readline

n = int(input())
dp = [0 for _ in range(n+1)]
dp[1] = 0
# def minimalNum(i):
#     if i == 1:
#         arr[i] = 0
#         return arr[1]

#     if arr[i] != 10**6:
#         return arr[i]

#     if i % 3 == 0:
#         arr[i] = min(arr[i], minimalNum(i//3) + 1)
#     if i % 2 == 0:
#         arr[i] = min(arr[i], minimalNum(i//2) + 1)
#     arr[i] = min(arr[i], minimalNum(i-1)+1)
#     return arr[i]

for i in range(2, n+1):
    if i % 2 == 0 and i % 3 != 0:
        dp[i] = min(dp[i//2], dp[i-1]) + 1
    elif i % 3 == 0 and i % 2 != 0:
        dp[i] = min(dp[i//3], dp[i-1]) + 1
    elif i % 3 == 0 and i % 2 == 0:
        dp[i] = min(dp[i//2], dp[i//3], dp[i-1]) + 1
    elif i % 2 != 0 and i % 3 != 0:
        dp[i] = dp[i-1] + 1
print(dp[-1])
