n = int(input())
arr = []
for _ in range(n):
    arr.append(list(map(int, input().split())))

nm = 0
np = 0
nz = 0


def cut(x, y, n):
    global nm, np, nz

    num_check = arr[x][y]
    for i in range(x, x+n):
        for j in range(y, y+n):
            if(arr[i][j] != num_check):
                for k in range(3):
                    for l in range(3):
                        cut(x+k*n//3, y+l*n//3, n//3)
                return

    if num_check == -1:
        nm += 1
    elif num_check == 0:
        nz += 1
    elif num_check == 1:
        np += 1


cut(0, 0, n)
print(nm)
print(nz)
print(np)
