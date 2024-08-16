function generateRandomArray(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 1000));
  }
  return [...new Set(arr)];
}

const unsorted = generateRandomArray(100);

function someRandomSort(unsorted) {
  const sorted = [];

  const alg = (sorted, uns, idx) => {
    const val = uns[idx];

    if (!sorted.length) {
      sorted.push(val);
      return alg(sorted, uns, idx + 1);
    }

    let added = false;
    for (let i = 0; i < sorted.length; i++) {
      if (val < sorted[i]) {
        added = true;
        sorted.splice(i, 0, val);
        break;
      }
    }

    if (!added) sorted.push(val)

    if (sorted.length !== uns.length) {
      return alg(sorted, uns, idx + 1);
    }

    return sorted;
  };

  alg(sorted, unsorted, 0);

  return sorted;
}

console.time('someRandomSort')
const sorted = someRandomSort(unsorted);
console.log(sorted);
console.timeEnd('someRandomSort')
