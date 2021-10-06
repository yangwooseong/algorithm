import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
stack = []


def dfs(start):
    if len(stack) == m:
        print(' '.join(list(map(str, stack))))
        return

    for i in range(start, n+1):
        if i not in stack:
            stack.append(i)
            dfs(i+1)
            stack.pop()


dfs(1)
