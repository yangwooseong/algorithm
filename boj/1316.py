ans = 0
for _ in range(int(input())):
    checked = []
    word = input()
    adjacent_word = True
    for idx, char in enumerate(word):
        if idx == 0:
            checked.append(char)
            last = char
        else:
            if char == last:
                continue
            else:
                if char in checked:
                    adjacent_word = False
                    break
                else:
                    last = char
                    checked.append(char)
    ans = ans + adjacent_word

print(ans)
