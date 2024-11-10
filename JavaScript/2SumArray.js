// Brute Force Approach - O(n*n)
function twoSumBfa(arr, target) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let second = arr[j];

      sum = first + second;

      if (sum === target) {
        return { i, j };
      }
    }
  }
  return -1;
}

// Better Approach -
/**
 * Two Pointer Approach
 * O(nlogn) + O(n) => O(nlogn) as O(nlogn) is greater than O(n)
 */

function twoSumTwoPointerA(arr, target) {
  arr.sort((a, b) => a - b); // O(nlogn) - sorted in ascending order
  console.log(arr);
  let st = 0,
    end = arr.length - 1;

  while (st < end) {
    // run for O(n) at the worst case (no of ops at the worst case)
    let sum = 0;
    sum = arr[st] + arr[end];

    if (sum === target) {
      return { st, end };
    } else if (sum > target) {
      end--;
    } else {
      st++;
    }
  }
  return -1;
}

const arr = [5, 2, 11, 7, 15];

const target = 16;

// Brute Force Approach- O(n * n)
// console.log(twoSumBfa(arr, target));

// Better Approach - O(nlogn)
console.log(twoSumTwoPointerA(arr, target));
