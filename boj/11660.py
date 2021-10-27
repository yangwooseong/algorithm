import sys
input = sys.stdin.readline
n, m = list(map(int, input().rstrip().split()))
arr = [list(map(int, input().rstrip().split())) for _ in range(n)]
dp = [[0] * (m+1) for _ in range(n+1)]
