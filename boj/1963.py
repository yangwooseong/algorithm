from collections import deque
import sys
input = sys.stdin.readline


def is_prime(n):
    if n == 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False

    m = 3
    while m*m <= n:
        if n % m == 0:
            return False
        m += 2
    return True


def bfs(start, end, primes):
    queue = deque([start])
    visited = [0 for _ in range(10000)]
    step = 0
    while queue:
        step += 1
        q = queue.popleft()
        if q == end:
            return visited[q]
        for prime in primes:
            if visited[prime]:
                continue

            cnt = 0

            for i in range(4):
                if str(prime)[i] != str(q)[i]:
                    cnt += 1
                    if cnt > 1:
                        break
                if i == 3 and cnt == 1:
                    queue.append(prime)
                    visited[prime] = visited[q] + 1
    return 'Impossible'


primes = []
for i in range(1001, 10000):
    if is_prime(i):
        primes.append(i)

for _ in range(int(input())):
    x, y = list(map(int, input().split()))
    print(bfs(x, y, primes))
