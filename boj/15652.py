import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
arr = []


def nAndM(i):
    if len(arr) == m:
        print(' '.join(list(map(str, arr))))
        return
    for j in range(i, n+1):
        arr.append(j)
        nAndM(j)
        arr.pop()


nAndM(1)
