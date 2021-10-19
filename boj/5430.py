t = int(input())

for _ in range(t):
    orders = list(input())
    n = int(input())
    arr = list(filter(lambda x: x != '', input()[1:-1].split(',')))
    ans = ''
    reverse = 0

    for order in orders:
        if order == 'R':
            reverse += 1
        else:
            if len(arr) == 0:
                ans = 'error'
                break
            else:
                if reverse % 2 == 0:
                    arr.pop(0)
                else:
                    arr.pop()

    if ans == 'error':
        print(ans)
    else:
        print('[', end='')
        if reverse % 2 == 1:
            arr.reverse()

        for i in range(len(arr)):
            if i != len(arr) - 1:
                print(arr[i], end=',')
            else:
                print(arr[i], end='')
        print(']')
