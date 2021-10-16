n = int(input())

arr = [[] for _ in range(26)]
for _ in range(n):
    root, left, right = list(
        map(lambda x: ord(x) - ord('A'), input().split()))
    arr[root].append((left, right))


def preorder(node):
    if len(arr[node]) == 0:
        return
    print(chr(ord('A') + node), end='')

    left, right = arr[node][0]
    if left != -19:
        preorder(left)
    if right != -19:
        preorder(right)


def inorder(node):
    if len(arr[node]) == 0:
        print(chr(ord('A') + node), end='')
        return
    left, right = arr[node][0]
    if left != -19:
        inorder(left)
    print(chr(ord('A') + node), end='')
    if right != -19:
        inorder(right)


def postorder(node):
    if len(arr[node]) == 0:
        print(chr(ord('A') + node), end='')
        return
    left, right = arr[node][0]
    if left != -19:
        postorder(left)
    if right != -19:
        postorder(right)
    print(chr(ord('A') + node), end='')


preorder(0)
print()
inorder(0)
print()
postorder(0)
