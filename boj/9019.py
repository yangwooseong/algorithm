from collections import deque
n = int(input())


def op_d(n):
    return 2*n % 10**4


def op_s(n):
    return n-1 if n != 0 else 9999


def op_l(n):
    return int(n % 1000 * 10 + n / 1000)


def op_r(n):
    return int(n % 10 * 1000 + n // 10)


ops = [op_d, op_s, op_l, op_r]


def bfs(start, end):
    queue = deque([start])
    if start == end:
        return 0
    step = 0
    while queue:
        step += 1
        if step == 10:
            break
        q = queue.popleft()
        if q == end:
            break

        next_q = op_d(q)
        if next_q not in visited:
            visited[next_q].append('D')
            queue.append(next_q)
        next_q = op_s(q)
        if next_q not in visited:
            visited[next_q].append('S')
            queue.append(next_q)
        next_q = op_l(q)
        if next_q not in visited:
            visited[next_q].append('L')
            queue.append(next_q)
        next_q = op_r(q)
        if next_q not in visited:
            visited[next_q].append('R')
            queue.append(next_q)
        if end in visited:
            break

    # while end != start:
    #     if end in visited:
    #         op = visited[end]
    #     if op == 'D':
    #         end = end // 2
    #     elif op == 'S':
    #         end = end + 1 if end != 9999 else 0
    #     elif op == 'L':
    #         end = op_r(end)
    #     elif op == 'R':
    #         end = op_l(end)
    #     ans += op
    # return ans[::-1]


for _ in range(n):
    start, end = list(map(int, input().split()))
    visited = {start: []}
    print(bfs(start, end))
