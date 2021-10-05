import sys
input = sys.stdin.readline

n = int(input())
a = []

for _ in range(n):
    a.append(list(input().rstrip()))


def get_longest_sequence(a, i, j):
    m = 1
    M = 1
    for k in range(n-1):
        if a[k][j] == a[k+1][j]:
            m += 1
            M = max(M, m)
        else:
            m = 1

    m = 1
    for k in range(n-1):
        if a[i][k] == a[i][k+1]:
            m += 1
            M = max(M, m)
        else:
            m = 1

    return M


M = 1
for i in range(n):
    for j in range(n):
        if i != n-1:
            a[i][j], a[i+1][j] = a[i+1][j], a[i][j]
            M = max(M, get_longest_sequence(a, i, j),
                    get_longest_sequence(a, i+1, j))
            a[i][j], a[i+1][j] = a[i+1][j], a[i][j]
        if j != n-1:
            a[i][j], a[i][j+1] = a[i][j+1], a[i][j]
            M = max(M, get_longest_sequence(a, i, j),
                    get_longest_sequence(a, i, j+1))
            a[i][j], a[i][j+1] = a[i][j+1], a[i][j]
print(M)
