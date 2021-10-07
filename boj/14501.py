import sys
input = sys.stdin.readline
n = int(input())
work_arr = []  # Array<[t, p]>
dp = [0 for _ in range(n+1)]

for _ in range(n):
    work_arr.append(list(map(int, input().split())))

for i in range(n-1, -1, -1):
    if i + work_arr[i][0] > n:
        dp[i] = dp[i+1]
    else:
        dp[i] = max(dp[i+1], work_arr[i][1] + dp[i+work_arr[i][0]])

    # print(dp)
print(dp[0])

# for i in range(n):
#     if i + work_arr[i][0] > n:
#         dp[i] = dp[i-1]
#     else:
#         for j in range(i):
#             if work_arr[j][0] + j - 1 > i:
#                 continue
#             dp[i] = max(dp[i], dp[j] + work_arr[j][1])
#     print(dp)
