n, m = list(map(int, input().split()))
arr = list(map(int, input().split()))

left, right = 0, m-1
left_max, right_max = arr[left], arr[right]
ans = 0

while left < right:
    left_max, right_max = max(left_max, arr[left]), max(right_max, arr[right])

    if left_max < right_max:
        ans += left_max - arr[left]
        left += 1
    else:
        ans += right_max - arr[right]
        right -= 1

print(ans)
