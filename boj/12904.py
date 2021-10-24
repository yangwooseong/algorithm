from collections import deque

s = input()
t = input()


def bfs():
    queue = deque([t])
    visited = [t]
    while queue:
        q = queue.popleft()
        if q == s:
            return 1

        if len(q) == 1:
            continue

        if q[-1] == 'A':
            next_s = q[:-1]
            if next_s not in visited:
                visited.append(next_s)
                queue.append(next_s)
        if q[-1] == 'B':
            next_s = q[:-1][::-1]
            if next_s not in visited:
                visited.append(next_s)
                queue.append(next_s)
        # print(visited)

    return 0


print(bfs())
