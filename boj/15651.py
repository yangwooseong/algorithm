import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
arr = []


def nAndM():
    if len(arr) == m:
        print(' '.join(list(map(str, arr))))
        return
    for i in range(1, n+1):
        arr.append(i)
        nAndM()
        arr.pop()


nAndM()
