// aasan zindegi
function mergeArray(A, B) {
  let i = 0,
    j = 0,
    c = [];

  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      c.push(A[i]);
      i++;
    } else {
      c.push(B[j]);
      j++;
    }
  }

  while (i < A.length) {
    c.push(A[i]);
    i++;
  }

  while (j < B.length) {
    c.push(B[j]);
    j++;
  }

  return c;
}
const A = [1, 2, 3];
const B = [2, 5, 6];
// console.log(mergeArray(A, B));

// coder zindegi

function mergeArray2(arr, arr2) {
  let i = arr.length - 1,
    j = arr2.length - 1,
    idx = arr.length + arr2.length - 1;

  while (i >= 0 && j >= 0) {
    if (arr[i] > arr2[j]) {
      arr[idx] = arr[i];
      idx--, i--;
    } else {
      arr[idx] = arr2[j];
      idx--, j--;
    }
  }

  while (j >= 0) {
    arr[idx] = arr2[j];
    idx--, j--;
  }

  return arr;
}
let arr = [1, 2, 3];
let arr2 = [1, 3, 6];

console.log(mergeArray2(arr, arr2));
