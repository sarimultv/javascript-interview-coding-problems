/**
 * Time complexity of Selection Sort is O(n^2)
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[smallestIdx];
    arr[smallestIdx] = temp;
  }
  return arr;
}

const arr = [4, 1, 5, 2, 3];

console.log(selectionSort(arr));
