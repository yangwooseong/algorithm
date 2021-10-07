import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
arr = list(map(int, input().split()))
arr.sort()
stack = []


def nAndM(start):
    if len(stack) == m:
        print(' '.join(list(map(str, stack))))
        return
    for j in arr:
        if j not in stack and j >= start:
            stack.append(j)
            nAndM(j)
            stack.pop()


nAndM(arr[0])
