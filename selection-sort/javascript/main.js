function generateRandomArray(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 1000));
  }
  return [...new Set(arr)];
}

const unsorted = generateRandomArray(100);

function getLowest(unsorted, index, lowestNum, lowestInd) {
  let lowestNumber = lowestNum;
  let lowestIndex = lowestInd;

  if (unsorted[index + 1] < lowestNumber) {
    lowestNumber = unsorted[index + 1];
    lowestIndex = index + 1;
  }

  if (index + 1 !== unsorted.length) {
    return getLowest(unsorted, index + 1, lowestNumber, lowestIndex);
  }

  return [lowestNumber, lowestIndex];
}

function selectionSort(unsorted) {
  const sorted = [];
  let temp = [...unsorted];

  while (temp.length) {
    const [lowNum, lowIndex] = getLowest(temp, 0, temp[0]);
    sorted.push(lowNum);
    temp.splice(lowIndex, 1);
  }

  return sorted;
}

console.time('selectionSort')
const sorted = selectionSort(unsorted);
console.timeEnd('selectionSort')
