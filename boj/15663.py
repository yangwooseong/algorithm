import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
arr = list(map(int, input().split()))
arr.sort()
stack_value = []
visited = [0 for _ in range(n)]
results = []


def nAndM():
    if len(stack_value) == m:
        result = ' '.join(list(map(str, stack_value)))
        print(result)
        return
    last_value = None
    for idx, value in enumerate(arr):
        if not visited[idx] and last_value != value:
            stack_value.append(value)
            last_value = value
            visited[idx] = 1
            nAndM()
            stack_value.pop()
            visited[idx] = 0


nAndM()
