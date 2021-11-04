n, m = list(map(int, input().split()))
arr = list(map(int, input().split()))

left, right = [], []
for book in arr:
    if book < 0:
        left.append(book)
    elif book > 0:
        right.append(book)

distance = []
left.sort()
for i in range(len(left) // m):
    distance.append(abs(left[m*i]))
if len(left) % m > 0:
    distance.append(abs(left[(len(left)//m)*m]))

right.sort(reverse=True)
for i in range(len(right) // m):
    distance.append(right[m*i])
if len(right) % m > 0:
    distance.append(right[(len(right)//m) * m])

ans = 2*sum(distance) - max(distance)
print(ans)
