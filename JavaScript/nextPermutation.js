function findNextPermutation(arr) {
  let pivot = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      pivot = i;
      break;
    }
  }
  if (pivot === -1) {
    arr.reverse();
    return arr;
  }

  for (let i = arr.length - 1; i > pivot; i--) {
    if (arr[i] > arr[pivot]) {
      let temp = arr[i];
      arr[i] = arr[pivot];
      arr[pivot] = temp;
      break;
    }
  }

  let i = pivot + 1,
    j = arr.length - 1;

  while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++, j--;
  }

  return arr;
}

const arr = [4, 4, 2, 2, 1];

console.log(findNextPermutation(arr));
