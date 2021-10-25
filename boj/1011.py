for _ in range(int(input())):
    x, y = list(map(int, input().split()))
    distance = y - x
    count = 0
    move = 1
    move_total = 0
    while move_total < distance:
        count += 1
        move_total += move
        if count % 2 == 0:
            move += 1
    print(count)
