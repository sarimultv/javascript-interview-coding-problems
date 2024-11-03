const isValid = (arr, n, m, mid) => {
  // TC - O(n)
  let stu = 1,
    pages = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > mid) {
      return false;
    }
    if (pages + arr[i] <= mid) {
      debugger;
      pages += arr[i];
    } else {
      debugger;
      stu++;
      pages = arr[i];
    }
  }
  if (stu > m) {
    debugger;
    return false;
  } else {
    debugger;
    return true;
  }
};

const findMinOfMaxPages = (arr, n, m) => {
  if (m > n) {
    return -1;
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    // TC is O(n)

    sum += arr[i];
  }

  // possible solution range from min to max value
  let st = 1, // min value
    end = sum - 1, // max value
    ans = -1;

  while (st <= end) {
    // TC - O(log(RangeMinToMax) * n) --- RangeMinToMax === range from min to max, here it is range
    // n is number of books

    let mid = Math.floor(st + (end - st) / 2);

    if (isValid(arr, n, m, mid)) {
      debugger;
      // mid is valid
      ans = mid;
      end = mid - 1; // got answer but search for more min value
    } else {
      // mid is inValid
      debugger;
      st = mid + 1;
    }
  }

  return ans;
};

const arr = [15, 17, 20];
let n = arr.length;

let m = 2;

console.log(findMinOfMaxPages(arr, n, m));
