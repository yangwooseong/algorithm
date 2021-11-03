import sys
input = sys.stdin.readline
n, m = list(map(int, input().rstrip().split()))
arr = [list(map(int, input().rstrip().split())) for _ in range(n)]
dp = [[0] * (n+1) for _ in range(n+1)]
dp[1][1] = arr[0][0]

for i in range(2, n+1):
    dp[1][i] = dp[1][i-1] + arr[0][i-1]

for i in range(2, n+1):
    for j in range(n+1):
        dp[i][j] = dp[i-1][j] + sum(arr[i-1][:j])

# print(dp)
for _ in range(m):
    x1, y1, x2, y2 = list(map(int, input().rstrip().split()))
    print(dp[x2][y2] - dp[x1-1][y2] - dp[x2][y1-1] + dp[x1-1][y1-1])

# 열만 고려한 코드
# import sys
# N, M = map(int, input().split())

# # 원래 매트릭스 받기
# matrix = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

# # 열별로 sum한 매트릭스 따로 만들어주기
# for i in range(N):
#     for j in range(N):
#         if j == 0:
#             pass
#         else:
#             matrix[i][j] += matrix[i][j-1]
# print(matrix)
# # 행별 합 출력
# for _ in range(M):
#     i, j, x, y = map(int, sys.stdin.readline().split())
#     answer = 0
#     for k in range(i-1, x):
#         if j != 1:
#             answer -= matrix[k][j-2]
#         answer += matrix[k][y-1]
#     print(answer)
