c, r = list(map(int, input().split()))
k = int(input())

if c*r < k:
    print(0)
    exit()


def get_idx(k):
    x = c + r
    n = 1
    while 2*(x-2*n)*n < k:
        n += 1
    n -= 1
    return n+1, 2*(x-2*n)*n + 1


n, total = get_idx(k)
# print(n, total)
sx, sy = n, n
dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
d = 0

while k - total > 0:
    sx, sy = sx + dirs[d][0], sy + dirs[d][1]
    if sx == n and sy == r-n+1:
        d += 1
    if sx == c-n+1 and sy == r-n+1:
        d += 1
    if sx == c-n+1 and sy == n:
        d += 1
    k -= 1
    # print(sx, sy)

print(sx, sy)
