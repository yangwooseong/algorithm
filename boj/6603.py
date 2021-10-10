def get_combination(idx, nums):
    if len(combination) == 6:
        print(' '.join(list(map(str, combination))))
        return

    for i in range(idx, len(nums)):
        if nums[i] not in combination:
            combination.append(nums[i])
            get_combination(i+1, nums)
            combination.pop()


while True:
    arr = list(map(int, input().split()))
    if arr == [0]:
        break

    n, nums = arr[0], arr[1:]
    combination = []
    get_combination(0, nums)
    print()
