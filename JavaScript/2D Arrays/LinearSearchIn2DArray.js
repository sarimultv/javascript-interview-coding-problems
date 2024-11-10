function linearSearch(matrix, key) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === key) {
        //return true;
        return [i, j];
      }
    }
  }
  //return false;
  return [-1, -1];
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const key = 8;

console.log(linearSearch(matrix, key));
