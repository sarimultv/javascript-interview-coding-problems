// Q. find largest element in nested array

function findLargestElement(arr) {
  let largestElement = arr[0][0];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestElement) {
        largestElement = arr[i][j];
      }
    }
  }
  return largestElement;
}

const arr = [
  [1, 2, 3],

  [7, 8, 9],
];

console.log(findLargestElement(arr));
