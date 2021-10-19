from collections import Counter
import sys
input = sys.stdin.readline

n = int(input())

arr = []
for _ in range(n):
    arr.append(int(input()))

arr.sort()
cnt = Counter(arr).most_common()

print(round(sum(arr)/n))
print(arr[(n-1)//2])
if len(cnt) > 1 and cnt[0][1] == cnt[1][1]:
    print(cnt[1][0])
else:
    print(cnt[0][0])
print(arr[-1] - arr[0])
