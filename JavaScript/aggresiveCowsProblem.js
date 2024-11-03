function isValid(arr, n, C, mid) {
  let cows = 1,
    lastStallPos = arr[0];

  for (let i = 1; i < n; i++) {
    if (arr[i] - lastStallPos >= mid) {
      cows++;
      lastStallPos = arr[i];
    }
    if (cows === C) {
      return true;
    }
  }
  return false;
}

function findDistance(arr, n, C) {
  arr.sort();

  let st = 1;
  let end = arr[n - 1] - arr[0];
  let ans = -1;

  while (st <= end) {
    let mid = Math.floor(st + (end - st) / 2);

    if (isValid(arr, n, C, mid)) {
      // valid
      ans = mid;
      st = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

const arr = [1, 2, 8, 4, 9];
const n = arr.length;
const C = 3;

console.log(findDistance(arr, n, C));
