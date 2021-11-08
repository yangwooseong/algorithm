text = input()
word = input()

start = 0
l = len(word)
cnt = 0

while start <= len(text)-l:
    if text[start:start+l] == word:
        cnt += 1
        start += l
    else:
        start += 1
    # print(start, cnt)

print(cnt)
