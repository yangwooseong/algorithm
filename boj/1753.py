import heapq
import sys
input = sys.stdin.readline
MAX = int(1e9)  # 무한을 의미하는 값으로 10억을 설정

# 노드의 개수, 간선의 개수 입력받기
n, m = map(int, input().split())
start = int(input())
graph = [[] for _ in range(n+1)]
distance = [MAX] * (n+1)

for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))


def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0
    while q:
        dist, now = heapq.heappop(q)
        # # 현재 노드가 이미 처리된 적이 있는 노드라면 무시
        # if distance[now] < dist:
        #     continue
        # 왜 필요한지 이해 불가..

        for i in graph[now]:
            cost = dist + i[1]
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))
        print(q, i)


dijkstra(start)

for i in range(1, n+1):
    if distance[i] == MAX:
        print("INF")
    else:
        print(distance[i])
