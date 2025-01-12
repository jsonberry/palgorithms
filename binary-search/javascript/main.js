function genList2(upper) {
  const arr = []
  for (let index = 0; index < upper; index++) {
    arr.push(index);
  }

  return arr;
}

function genList(upper) {
  return (new Array(upper)).map((_, i) => i);
}

// const l =  genList(100000000);
// const target = 7382123;

const l =  genList(100_000_000);
const target = 200_200;


function binarySearch(list, target) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    const guess = list[mid];

    if (guess === target) return guess;

    if (guess > target) {
      high = mid--;
    }

    if (guess < target) {
      low = mid++;
    }
  }

  return null;
}

console.time('binary')
const res = binarySearch(l, target);
console.timeEnd('binary');

console.log('------------')

console.time();
l.find((x) => x === target);
console.timeEnd();

console.log(res);
