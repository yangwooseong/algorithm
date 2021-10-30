n = int(input())
arr = [list(map(int, list(input()))) for _ in range(n)]


def is_all(i_start, i_end, j_start, j_end, target):
    for x in range(i_start, i_end):
        for y in range(j_start, j_end):
            if arr[x][y] != target:
                return False
    return True


ans = []


def recursion(i, j, cnt):
    if cnt == 0:
        ans.append(str(arr[i][j]))
        return
    # print(i, j, cnt)
    if is_all(i, i+2**cnt, j, j+2**cnt, 0):
        ans.append(str(0))
    elif is_all(i, i+2**cnt, j, j+2**cnt, 1):
        ans.append(str(1))
    else:
        ans.append('(')
        recursion(i, j, cnt-1)
        recursion(i, j+2**(cnt-1), cnt-1)
        recursion(i+2**(cnt-1), j, cnt-1)
        recursion(i+2**(cnt-1), j+2**(cnt-1), cnt-1)
        ans.append(')')


cnt = 0
while 2**cnt != n:
    cnt += 1

recursion(0, 0, cnt)

ans = ''.join(ans)
print(ans)
