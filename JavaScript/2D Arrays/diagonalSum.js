function diagonalSum(matrix) {
  let pd = 0; // pd: Primary Diagonal
  let sd = 0; // sd: Secondary Diagonal

  /**
   * TC- O(n * n)
   * for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i === j) {
        pd += matrix[i][j];
      } else if (j === matrix.length - i - 1) {
        sd += matrix[i][j];
      }
    }
  }
   */

  // Optimal Solution with time complexity - O(n)
  /**
   * Primary Diagonal sum, PD: i === j, we can replace j with i
   * Secondary Diagonal sum, SD: j= (n-i-1), we can replace j with (n-i-1)
   */

  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    pd += matrix[i][i];

    if (i !== n - i - 1) {
      sd += matrix[i][n - i - 1];
    }
  }

  return pd + sd;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(diagonalSum(matrix));
