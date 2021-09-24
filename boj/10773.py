
import sys

input = sys.stdin.readline


def final_sum(arr):
    stack = []
    for num in arr:
        if num != 0:
            stack.append(num)
        else:
            stack.pop()

    return sum(stack)


arr = [int(input()) for _ in range(int(input()))]
print(final_sum(arr))
