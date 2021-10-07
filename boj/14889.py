import sys
from collections import deque
sys.setrecursionlimit(100001)

input = sys.stdin.readline
n = int(input())
scores = []

for _ in range(n):
    scores.append(list(map(int, input().split())))

visited = [0 for _ in range(n)]
MIN = 10**4


def get_minimum_score_diff(idx, cnt):
    global MIN

    if cnt == n // 2:
        start, link = 0, 0
        for i in range(n):
            for j in range(n):
                if visited[i] and visited[j]:
                    start += scores[i][j]
                elif not visited[i] and not visited[j]:
                    link += scores[i][j]
        MIN = min(MIN, abs(start - link))
        return

    for i in range(idx, n):
        if visited[i]:
            continue
        visited[i] = 1
        get_minimum_score_diff(i+1, cnt+1)
        visited[i] = 0


get_minimum_score_diff(0, 0)
print(MIN)
