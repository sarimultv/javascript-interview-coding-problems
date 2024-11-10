function maxRowSum(matrix) {
  let maxRowSum = Number.MIN_VALUE;
  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      rowSum += matrix[i][j];
    }
    maxRowSum = Math.max(maxRowSum, rowSum);
  }

  return maxRowSum;
}

const matrix = [
  [1, 2, 30],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(maxRowSum(matrix));
