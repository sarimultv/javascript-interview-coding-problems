function sortArray(arr) {
  // brute force approach
  //arr.sort() // TC O(nlogn)

  // Optimised Approach with TC O(n)
  /*
  let countOfZeros = 0,
    countOfOnes = 0,
    countOfTwos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countOfZeros++;
    } else if (arr[i] === 1) {
      countOfOnes++;
    } else {
      countOfTwos++;
    }
  }
  let idx = 0;

  for (let j = 0; j < countOfZeros; j++) {
    arr[idx] = 0;
    idx++;
  }

  for (let j = 0; j < countOfOnes; j++) {
    arr[idx] = 1;
    idx++;
  }

  for (let j = 0; j < countOfTwos; j++) {
    arr[idx] = 2;
    idx++;
  }*/

  //Optimal approach using Dutch National Flag Algo - DNF - O(n) TC and O(1) SC

  let mid = 0,
    high = arr.length - 1,
    low = 0;

  while (mid <= high) {
    if (arr[mid] === 0) {
      let temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      mid++;
      low++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      let temp = arr[high];
      arr[high] = arr[mid];
      arr[mid] = temp;
      high--;
    }
  }

  return arr;
}

const arr = [2, 0, 2, 1, 1, 0, 1, 2, 0, 0];

console.log(sortArray(arr));
