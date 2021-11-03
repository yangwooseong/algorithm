from collections import deque

n, s, m = list(map(int, input().split()))
volumes = list(map(int, input().split()))

# dp 를 이용한 풀이

# dp = [[0] * (m+1) for _ in range(n+1)]
# dp[0][s] = 1

# for i in range(n):
#     for j in range(m+1):
#         if dp[i][j]:
#             if j + volumes[i] <= m:
#                 dp[i+1][j+volumes[i]] = 1
#             if j - volumes[i] >= 0:
#                 dp[i+1][j-volumes[i]] = 1

# ans = - 1
# for i in range(m, -1 ,-1):
#     if dp[-1][i] == 1:
#         ans = i
#         break

# print(ans)

# bfs 를 이용한 풀이


def bfs():
    queue = deque([s])
    cnt = 0
    while queue:
        next_queue = deque()
        for q in queue:
            nq = q + volumes[cnt]
            if 0 <= nq <= m and nq not in next_queue:
                next_queue.append(nq)
            nq = q - volumes[cnt]
            if 0 <= nq <= m and nq not in next_queue:
                next_queue.append(nq)
        queue = next_queue
        cnt += 1
        if cnt == n:
            if len(queue) == 0:
                print(-1)
            else:
                print(max(queue))
            return
    print(-1)


bfs()
