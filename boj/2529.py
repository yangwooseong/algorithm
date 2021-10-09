import sys
from collections import deque

input = sys.stdin.readline
n = int(input())
arr = input().split()

visited = [0 for _ in range(10)]
permutation = []

count = 0
M = 0
m = 10**10


def get_permutation(cnt):
    global count, M, m
    if cnt == n+1:
        for j in range(len(arr)):
            if arr[j] == '>' and permutation[j] < permutation[j+1]:
                break
            elif arr[j] == '<' and permutation[j] > permutation[j+1]:
                break
            if j == len(arr) - 1:
                num = int(''.join(list(map(str, permutation))))
                M = max(M, num)
                m = min(m, num)
        return

    for i in range(10):
        if not visited[i]:
            visited[i] = 1
            permutation.append(i)
            get_permutation(cnt+1)
            visited[i] = 0
            permutation.pop()


get_permutation(0)
print(M)
if len(str(m)) < n+1:
    print('0' + str(m))
else:
    print(m)
