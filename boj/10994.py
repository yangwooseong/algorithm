n = int(input())
length = 4*n - 3


def draw(n, idx):
    if n == 1:
        arr[idx][idx] = '*'
        return
    l = 4*n-3

    for i in range(idx, l+idx):
        arr[idx][i] = '*'
        arr[idx+l-1][i] = '*'
        arr[i][idx] = '*'
        arr[i][idx+l-1] = '*'

    return draw(n-1, idx+2)


arr = [[' ']*length for _ in range(length)]
draw(n, 0)

for i in range(length):
    for j in range(length):
        print(arr[i][j], end='')
    print()
