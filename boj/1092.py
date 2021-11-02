n = int(input())
limits = sorted(list(map(int, input().split())), reverse=True)
m = int(input())
boxes = sorted(list(map(int, input().split())), reverse=True)

if limits[0] < boxes[0]:
    print(-1)
    exit()
step = 0
while boxes:
    for limit in limits:
        for box in boxes:
            if limit >= box:
                boxes.remove(box)
                break
    step += 1

print(step)
