import sys
input = sys.stdin.readline

A = [list(input().rstrip()) for _ in range(int(input()))]


def count(arr):
    M = 1
    n = len(arr)
    for i in range(n):
        cnt = 1
        for j in range(n-1):
            if arr[i][j] == arr[i][j+1]:
                cnt += 1
                M = max(cnt, M)
            else:
                cnt = 1

        cnt = 1
        for j in range(n-1):
            if arr[j][i] == arr[j+1][i]:
                cnt += 1
                M = max(cnt, M)
            else:
                cnt = 1

    return M


n = len(A)
M = 1
for i in range(n):
    for j in range(n):
        if j != n-1:
            A[i][j], A[i][j+1] = A[i][j+1], A[i][j]
            M = max(M, count(A))
            A[i][j], A[i][j+1] = A[i][j+1], A[i][j]
        if i != n-1:
            A[i][j], A[i+1][j] = A[i+1][j], A[i][j]
            M = max(M, count(A))
            A[i][j], A[i+1][j] = A[i+1][j], A[i][j]

print(M)
