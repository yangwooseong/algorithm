n, s = map(int, input().split())
arr = list(map(int, input().split()))

left, right = 0, 0
current_sum = arr[0]
minimin_length = n
found = False

while right < len(arr):
    if current_sum < s:
        if right == len(arr)-1:
            break
        right += 1
        current_sum += arr[right]
    else:
        minimin_length = min(minimin_length, right-left+1)
        current_sum -= arr[left]
        left += 1
        found = True
    # print(left, right, minimin_length, current_sum)

if n == 1:
    if arr[0] >= s:
        print(1)
    else:
        print(0)
else:
    if found:
        print(minimin_length)
    else:
        print(0)
