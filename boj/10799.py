def num_of_cut(bar: str) -> int:
    num = 0
    arr = list(bar)
    stack = []
    for i in range(len(arr)):
        if arr[i] == '(':
            stack.append('(')
        elif arr[i] == ')':
            stack.pop()
            if arr[i-1] == '(':
                num += len(stack)
            elif arr[i-1] == ')':
                num += 1
    return num


ex1 = '()(((()())(())()))(())'
assert(num_of_cut(ex1) == 17)
ex2 = '(((()(()()))(())()))(()())'
assert(num_of_cut(ex2) == 24)

arr = list(input())
print(num_of_cut(arr))
