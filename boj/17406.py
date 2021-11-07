import sys
import copy
from itertools import permutations
input = sys.stdin.readline
n, m, k = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]
orders = [list(map(int, input().split())) for _ in range(k)]


def rotate(r, c, s, arr):
    for k in range(s):
        current = arr[r-s+k][c-s+k]
        for i in range(c-s+1+k, c+s+1-k):
            tmp = arr[r-s+k][i]
            arr[r-s+k][i] = current
            current = tmp

        for i in range(r-s+1+k, r+s+1-k):
            tmp = arr[i][c+s-k]
            arr[i][c+s-k] = current
            current = tmp

        for i in range(c+s-1-k, c-s+k, -1):
            tmp = arr[r+s-k][i]
            arr[r+s-k][i] = current
            current = tmp

        for i in range(r+s-k, r-s-1+k, -1):
            tmp = arr[i][c-s+k]
            arr[i][c-s+k] = current
            current = tmp

    return arr


ans = None
for per in permutations(orders):
    tmp = copy.deepcopy(arr)
    for order in per:
        r, c, s = order
        r, c = r - 1, c - 1
        tmp = rotate(r, c, s, tmp)

    for r in tmp:
        if ans is None or ans > sum(r):
            ans = sum(r)

print(ans)
