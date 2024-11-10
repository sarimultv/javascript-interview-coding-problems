function maxColSum(matrix) {
  let maxColSum = Number.MIN_VALUE;

  for (let i = 0; i < matrix.length; i++) {
    let colSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      colSum += matrix[j][i];
    }
    maxColSum = Math.max(maxColSum, colSum);
  }

  console.log(maxColSum);
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
maxColSum(matrix);
