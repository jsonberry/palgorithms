import time

def gen(upper):
 return list(range(upper))


def binary_search(list, target):
 low = 0
 high = len(list) - 1

 while low <= high:
    mid = (low + high) // 2
    guess = list[mid]

    if guess == target:
      return 'found!'
  
    if guess > target:
      high = mid - 1

    if guess < target:
      low = mid + 1

 return None
  

my_list = gen(100_000_000)
target = 7382123

start = time.time()
# print(start)

res = binary_search(my_list, target)

print(res)
print((time.time() - start) * 1000)

# print(time.time())









