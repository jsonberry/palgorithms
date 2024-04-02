// const oL = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];


// orderedList.length / 2 = 5
// find 8
// orderedList[5]
// == 5
// 5 < 8
// yeah, so "go right"
// arr = oL.slice(5)
// [6, 7, 8, 9, 10]
// Math.ceil(arr / 2)
// == 8? YAAAAAASS QUUUUEEEENNNNN and we'd be correct


// could do recursion
// could just looooooop

// function binarySearch(list, target) {

// }






function genList (upper) {
  const arr = []
  for (let index = 0; index < upper; index++) {
    arr.push(index);
  }

  return arr;
}

const l =  genList(100000000);

function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    const guess = list[mid];

    if (guess === item) return guess;

    if (guess > item) {
      high = mid--;
    }

    if (guess < item) {
      low = mid++;
    }
  }

  return null;
}

console.time('binary')
const res = binarySearch(l, 432100);
console.timeEnd('binary');

console.log('------------')

console.time();
l.find((x) => x === 432100);
console.timeEnd();

console.log(res);
