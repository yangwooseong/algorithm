import sys
input = sys.stdin.readline

# max 라서 O(n^2) 가능..
# for _ in range(int(input())):
#     n = int(input())
#     arr = list(map(int, input().split()))
#     profit = 0
#     while arr:
#         m, max_idx = max(arr), arr.index(max(arr))
#         for i in range(max_idx):
#             profit += m - arr[i]
#         arr = arr[max_idx+1:]
#         # print(arr, profit, max_idx)
#     print(profit)

# 모든 arr 를 볼 수 있다는 장점을 살리면..
for _ in range(int(input())):
    n = int(input())
    arr = list(map(int, input().split()))
    profit = 0
    m = None
    for i in range(n-1, -1, -1):
        if m is None or arr[i] > m:
            m = arr[i]
        else:
            profit += m - arr[i]
    # print(i, profit, m)
    print(profit)
