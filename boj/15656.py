import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
arr = list(map(int, input().split()))
arr.sort()
stack = []


def nAndM():
    if len(stack) == m:
        print(' '.join(list(map(str, stack))))
        return
    for j in arr:
        stack.append(j)
        nAndM()
        stack.pop()


nAndM()
