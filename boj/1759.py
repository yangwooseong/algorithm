import sys
input = sys.stdin.readline

l, c = list(map(int, input().split()))
arr = sorted(input().split())
stack = []


def dfs(start):
    if len(stack) == l and is_valid(stack):
        print(''.join(stack))
        return

    for i in range(start, len(arr)):
        if arr[i] not in stack:
            stack.append(arr[i])
            dfs(i)
            stack.pop()


def is_valid(arr):
    vocal = len(list(filter(lambda x: x in list('aeiou'), arr)))
    constonant = len(
        list(filter(lambda x: x in list('bcdfghjklmnpqrstvwxyz'), arr)))
    return vocal >= 1 and constonant >= 2


dfs(0)
