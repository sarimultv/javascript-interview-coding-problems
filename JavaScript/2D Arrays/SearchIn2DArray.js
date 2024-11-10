function searchInRow(arr, target, n, midRow) {
  let stCol = 0,
    endCol = n - 1;

  while (stCol <= endCol) {
    let mid = Math.floor(stCol + (endCol - stCol) / 2);

    if (target === arr[midRow][mid]) {
      return true;
    } else if (target > arr[midRow][mid]) {
      stCol = mid + 1;
    } else {
      endCol = mid - 1;
    }
  }

  return false;
}

function searchIn2dArray(arr, target) {
  let m = arr.length;
  let n = arr[0].length;
  let startRow = 0;
  let endRow = m - 1;

  while (startRow <= endRow) {
    let midRow = Math.floor(startRow + (endRow - startRow) / 2);

    if (target >= arr[midRow][0] && target <= arr[midRow][n - 1]) {
      //found the target

      return searchInRow(arr, target, n, midRow);
    } else if (target > arr[midRow][n - 1]) {
      // search in right - down

      startRow = midRow + 1;
    } else if (target < arr[midRow][0]) {
      // search in left - up

      endRow = midRow - 1;
    }
  }

  return false;
}

const arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

const target = 12;

console.log(searchIn2dArray(arr, target));
