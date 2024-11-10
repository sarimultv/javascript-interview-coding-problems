function searchIn2dArray2(arr, target) {
  let m = arr.length;
  let n = arr[0].length;

  let row = 0,
    col = n - 1;

  while (col >= 0 && row < m) {
    if (target === arr[row][col]) return true;
    else if (target < arr[row][col]) col--;
    else if (target > arr[row][col]) row++;
  }
  return false;
}

const arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 13, 21],
  [23, 30, 34, 37, 60],
];

const target = 26;

console.log(searchIn2dArray2(arr, target));
