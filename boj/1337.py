import sys
input = sys.stdin.readline

A = [int(input()) for _ in range(int(input()))]
A.sort()

M = 0
for i in range(len(A)):
    cnt = 1
    sum_del = 0
    for j in range(i+1, len(A)):
        sum_del += A[j] - A[j-1]
        if sum_del >= 5:
            break
        cnt += 1
    M = max(M, cnt)
print(5-M)
