const singleElementInArray = (arr) => {
  // Linear Search approach O(n)
/*
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i] && arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }

  // Bitwise operator approach - using XOR(^) - O(n)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] ^ arr[i] && arr[i] ^ arr[i + 1]) {
      return arr[i];
    }
  }
*/
  // Optimise code using Binary Search - O(logn)

  let st = 0;
  let end = arr.length;
  if(end === 1) return arr[0];

  while (st <= end) {
    let mid = Math.floor(st + (end - st) / 2);

    if(mid === 0 && arr[0] !== arr[1]) return arr[mid];
    if(mid === end && arr[end] !== arr[end-2]) return arr[mid];

    if (arr[mid - 1] !== arr[mid] && arr[mid] !== arr[mid + 1]) return arr[mid];
    

    if (mid % 2 === 0) {
      if (arr[mid - 1] === arr[mid]) {
        end = mid - 1;
      } else {
        st = mid + 1;
      }
    } else {
      if (arr[mid - 1] === arr[mid]) {
        st = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

const arr = [1, 2, 2];

console.log(singleElementInArray(arr));
