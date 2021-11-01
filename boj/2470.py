n = int(input())
arr = list(map(int, input().split()))
arr.sort()

left, right = 0, n-1
min_abs = 2*(10**9)
al, ar = left, right

while left < right:
    if min_abs > abs(arr[left] + arr[right]):
        al, ar = arr[left], arr[right]
        min_abs = abs(arr[left] + arr[right])

    if arr[left] + arr[right] == 0:
        print(arr[left], arr[right])
        exit()
    elif arr[left] + arr[right] < 0:
        left += 1
    elif arr[left] + arr[right] > 0:
        right -= 1

print(al, ar)
