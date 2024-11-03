function isValid(arr, n, m, mid) {
  let pain = 1,
    timesTaken = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > mid) return false;
    if (timesTaken + arr[i] <= mid) {
      timesTaken += arr[i];
    } else {
      pain++;
      timesTaken = arr[i];
    }
  }
  return pain > m ? false : true;
}

function findMinTimeTakenToPain(arr, n, m) {
  if (m > n) return -1;

  let sum = 0,
    maxVal = Number.MIN_VALUE;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    maxVal = Math.max(maxVal, arr[i]);
  }

  let st = maxVal,
    end = sum,
    ans = -1;

  while (st <= end) {
    let mid = Math.floor(st + (end - st) / 2);

    if (isValid(arr, n, m, mid)) {
      //valid
      ans = mid;
      end = mid - 1;
    } else {
      st = mid + 1;
    }
  }

  return ans + " mins to paint all board";
}

const arr = [40, 30, 10, 20];
console.log(Number.MIN_VALUE);
const n = arr.length;
const m = 2;

console.log(findMinTimeTakenToPain(arr, n, m));
