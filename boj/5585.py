n = int(input())
moneys = [500, 100, 50, 10, 5, 1]
ans = 0
change = 1000 - n


for money in moneys:
    num = change // money
    change -= num * money
    ans += num

print(ans)
