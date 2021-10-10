import sys
input = sys.stdin.readline

# 참고 코드 ㅜㅜ 어렵다..

# def solve():
#     M, N = map(int, input().rstrip().split())
#     inputs = []
#     for _ in range(M):
#         inputs += list(map(int, input()))
#     matches = dict()
#     for i in range(M):
#         for j in range(N):
#             bits = value = 0
#             for k in range(j, N):
#                 bits += 1 << (N*i+k)
#                 value = 10*value + inputs[N*i+k]
#                 matches[bits] = value
#     for j in range(N):
#         for i in range(M):
#             bits = value = 0
#             for k in range(i, M):
#                 bits += 1 << (N*k+j)
#                 value = 10*value + inputs[N*k+j]
#                 matches[bits] = value

#     dp = [0]*(1 << (N*M))
#     for i in range(1, 1 << (N*M)):
#         dp[i] = max(dp[i-b] + matches[b] for b in matches if b & i == b)

#     return dp[-1]


# print(solve())

n, m = list(map(int, input().split()))
arr = []
for _ in range(n):
    arr.append(list(map(int, list(input().rstrip()))))

ans = 0
for s in range(1 << (n*m)):
    # 가로 사용 : 1 , 세로 사용 : 0
    sum = 0
    for i in range(n):
        current = 0
        for j in range(m):
            k = i*m+j
            if s & (1 << k):
                current = current * 10 + arr[i][j]
            else:
                sum += current
                current = 0
        sum += current

    for j in range(m):
        current = 0
        for i in range(n):
            k = i*m + j
            if not (s & (1 << k)):
                current = current * 10 + arr[i][j]
            else:
                sum += current
                current = 0
        sum += current

    ans = max(sum, ans)

print(ans)
