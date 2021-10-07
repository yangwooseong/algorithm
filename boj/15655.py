import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
arr = list(map(int, input().split()))
arr.sort()
stack = []


def nAndM():
    global stack
    if len(stack) == m:
        print(' '.join(list(map(str, stack))))
        return
    for j in arr:
        if j not in stack:
            stack.append(j)
            nAndM()
            stack.pop()


nAndM()
