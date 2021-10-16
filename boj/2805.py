n, m = list(map(int, input().split()))
arr = list(map(int, input().split()))

start = 0
end = 2 * (10 ** 9)


def binary_search(start, end):
    middle = (start + end) // 2
    while middle != start:
        s = sum(list(map(lambda x: max(0, x-middle), arr)))
        if s < m:
            end = middle
            middle = (start + end) // 2
        elif s > m:
            start = middle
            middle = (start + end) // 2
        else:
            return middle
    return middle


print(binary_search(0, end))
