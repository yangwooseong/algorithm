from collections import deque, defaultdict

n = int(input())
m = int(input())
arr = list(map(int, input().split()))
dict = defaultdict(int)
pics = []
for k in arr:
    if len(pics) < n:
        if k in pics:
            dict[k] += 1
        else:
            pics.append(k)
            dict[k] += 1
    else:
        if k in pics:
            dict[k] += 1
        else:
            cnt = 1
            found = False
            while not found:
                for j in range(n):
                    if dict[pics[j]] == cnt:
                        del dict[pics[j]]
                        pics.pop(j)
                        pics.append(k)
                        dict[k] = 1
                        found = True
                        break
                cnt += 1
    # print(pics, dict)
print(' '.join(list(map(str, sorted(pics)))))
