from collections import deque
n = int(input())


def op_d(n):
    return 2*n % 10**4


def op_s(n):
    return n-1 if n != 0 else 9999


def op_l(n):
    return n % 1000 * 10 + n // 1000


def op_r(n):
    return n % 10 * 1000 + n // 10


ops = [op_d, op_s, op_l, op_r]


def bfs(start, end):
    queue = deque()
    visited = set()
    queue.append((start, ''))
    visited.add(start)

    while queue:
        q, op = queue.popleft()
        if q == end:
            return op

        next_q = op_d(q)
        if next_q not in visited:
            visited.add(next_q)
            queue.append((next_q, op+'D'))
        next_q = op_s(q)
        if next_q not in visited:
            visited.add(next_q)
            queue.append((next_q, op+'S'))
        next_q = op_l(q)
        if next_q not in visited:
            visited.add(next_q)
            queue.append((next_q, op+'L'))
        next_q = op_r(q)
        if next_q not in visited:
            visited.add(next_q)
            queue.append((next_q, op+'R'))


for _ in range(n):
    start, end = list(map(int, input().split()))
    print(bfs(start, end))
