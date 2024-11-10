function printSpiralArray(arr) {
  let ans = [];

  let srow = 0,
    erow = arr.length - 1,
    scol = 0,
    ecol = arr[0].length - 1;

  while (srow <= erow && scol <= ecol) {
    // Top
    for (let j = scol; j <= ecol; j++) {
      ans.push(arr[srow][j]);
    }
    // Right
    for (let i = srow + 1; i <= erow; i++) {
      ans.push(arr[i][ecol]);
    }

    // Bottom - corner case is managed here
    for (let j = ecol - 1; j >= scol; j--) {
      if (srow === erow) {
        break;
      }
      ans.push(arr[erow][j]);
    }

    // Left - corner case is managed here
    for (let i = erow - 1; i >= srow + 1; i--) {
      if (scol === ecol) {
        break;
      }
      ans.push(arr[i][scol]);
    }

    srow++, erow--, scol++, ecol--;
  }

  return ans;
}

const arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

console.log(printSpiralArray(arr));
