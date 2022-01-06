import heapq


def solution(jobs):
    answer, now, job_done = 0, 0, 0
    heap = []
    start = -1

    while job_done < len(jobs):
        for job in jobs:
            if start < job[0] <= now:
                heapq.heappush(heap, [job[1], job[0]])
        if heap:
            current = heapq.heappop(heap)
            start = now
            now += current[0]
            answer += now - current[1]
            job_done += 1
        else:
            now += 1
        print(now, start, heap)
    return int(answer / len(jobs))


solution([[0, 3], [1, 9], [2, 6]])
