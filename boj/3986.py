count = 0
for _ in range(int(input())):
    stack = []
    s = input()
    good = True
    for char in s:
        if stack == []:
            stack.append(char)
        elif stack[-1] == char:
            stack.pop()
        elif stack[-1] != char:
            stack.append(char)

    count = count + 1 if stack == [] else count

print(count)
