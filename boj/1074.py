n, r, c = list(map(int, input().split()))

cnt = 0


def traverse(x, y, n):
    global cnt
    if n == 0:
        # print(x, y, n)
        if (x, y) == (r, c):
            print(cnt)
            exit()
        cnt += 1
        return

    if not (x <= r < x+2**n and y <= c < y+2**n):
        cnt += (2**n)**2
        return

    traverse(x, y, n-1)
    traverse(x, y+2**(n-1), n-1)
    traverse(x+2**(n-1), y, n-1)
    traverse(x + 2**(n-1), y + 2**(n-1), n-1)


traverse(0, 0, n)
