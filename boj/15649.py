import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
trace = []


def dfs(k):
    if k == m:
        print(' '.join(list(map(str, trace))))
        return
    for i in range(n):
        if i+1 not in trace:
            trace.append(i+1)
            dfs(k+1)
            trace.pop()


dfs(0)
